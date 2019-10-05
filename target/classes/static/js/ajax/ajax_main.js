$(document).ready(function () {
    checkLogin();
    checkpass();
    checkStatusLogin();
});

async function ajaxCall(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: url,
        timeout: 30000,
        success: function (result) {
            rs = result
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    return rs;
}

function checkLogin() {
    $("#submit-log").click(function () {
        if ($("#email").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {

            postInfoUserDangNhap();
        } else {
            alert("Vui lòng nhập đúng định dạng email.");
            return false;
        }
    });
}

function postInfoUserDangNhap() {
    let dataUser = {
        "email": $("#email").val(),
        "password": $("#password").val()
    }
    $.ajax({
        type: 'POST',
        data: JSON.stringify(dataUser),
        url: URL_API + "v1/public/user/login",
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            if (result == "username or password is not correct") {
                alert("Tên tài khoản hoặc mật khẩu không chính xác")
            } else {
                alert(result)
                localStorage.setItem("infoUserLogin", JSON.stringify(result));
                window.location.href = "home";
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {

            console.log(errorThrown);
        }
    })

}

function checkResign() {

    let user = {
        "password": $("#pass1").val(),
        "fullName": $("#name").val(),
        "email": $("#emailSign").val(),
    }
    $.ajax({
        type: 'POST',
        data: JSON.stringify(user),
        url: URL_API + "v1/public/user/register",
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            alert(result);
            if (result == "Email has been used") {
                alert("Email đã được sử dụng")
            } else {
                alert(result)
                localStorage.setItem("infoUserResigter", JSON.stringify(result));
                window.location.href = "home";
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Email đã được sử dụng ")
            console.log(errorThrown);
        }
    })


}

function checkStatusLogin() {
    let tmp = "";
    let tmp2 = "";

    if (localStorage.getItem("infoUserResigter") !== null) {
        let user = JSON.parse(localStorage.getItem("infoUserResigter"));
        tmp = `
  <a href="#" class="user-name show" title="Tên Chủ tài Khoản">
                            <div class="usn-wp">
                                <div class="usn-img">
                                    <img src="resources/img/user2.png" alt="">
                                </div>
                                <span>${user.fullName}</span>
                            </div>
                        </a>
`;
        tmp2 = `
          <a href="#" class="icon iconlogout show" title="Đăng Xuất">
            <div class="ihwp">
                <i class="fas fa-sign-out-alt" title="Đăng Xuất"></i>
            </div>
        </a>
        `;
        $("#lockhome").hide();
        $("#header").append(tmp2);
        $("#addUser").append(tmp)
    }else if(localStorage.getItem("infoUserLogin")!==null){
        let user = JSON.parse(localStorage.getItem("infoUserLogin"));
        console.log(user)
        tmp = `
  <a href="#" id="nameUser" class="user-name show" title="Tên Chủ tài Khoản">
                            <div class="usn-wp">
                                <div class="usn-img">
                                    <img src="resources/img/user2.png" alt="">
                                </div>
                                <span>${user.fullName}</span>
                            </div>
                        </a>
`;
        tmp2 = `
          <a href="#" class="icon iconlogout show" id="logOut" title="Đăng Xuất">
            <div class="ihwp">
                <i class="fas fa-sign-out-alt" title="Đăng Xuất"></i>
            </div>
        </a>
        `;
        $("#lockhome").hide();
        $("#header").append(tmp2);
        $("#addUser").append(tmp);
        logOut();
    } else {
        $("#lockhome").show();

    }
}
function logOut() {
    $("#logOut").click(function () {
        localStorage.clear();
        $("#lockhome").show();
        $("#nameUser").hide();
    })
}
function checkpass() {
    $("#submitResign").click(function () {
        if ($("#pass1").val() === $("#pass2").val()) {
            console.log("1")
        } else {
            alert("Mật khẩu không khớp vui lòng nhập lại");
        }
        if ($("#emailSign").val() == "" || $("#emailSign").val() === null || $("#emailSign").val() === undefined) {
            alert("Vui lòng nhập email")
        } else {
            if ($("#emailSign").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {
                console.log("2")
            } else {
                alert("Sai định dạng email vui lòng nhập lại")
            }
        }

        if ($("#phoneNumber").val().match("(09|01[2|6|8|9])+([0-9]{8})\\b")) {
            console.log("3")
        } else {
            alert("Sai định dạng số điện thoại");
        }
        checkResign();

    })
}

async function ajaxCallGet(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        headers: {
            "Authorization": tokenHeader_value,
        },
        url: URL_API + url,
        timeout: 30000,
        success: function (result) {
            rs = result
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    return rs;
}

async function ajaxCallPost(url, dataUser) {
    let rs = null;
    await $.ajax({
        type: 'POST',
        data: JSON.stringify(dataUser),
        url: URL_API + url,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            rs = result
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    return rs;
}

// function callThongKeQuyHoach(mkh, idTinhHuyen) {
//     let url = `v1/public/read-excel/bieu_CH03/find-by-mkh?mkh=${mkh}&idTinhHuyen=${idTinhHuyen}`;
//     return ajaxCallGet(url);
// }


function getViewQuyetDinh(quyetDinh) {
    return `<div class="pr-info row">
                <div class="pr-infor-left col-3">
                    <span>Số quyết định</span>
                </div>
                <div class="pr-infor-right col-9">
                    <span>${quyetDinh.soQuyetDinh}</span>
                </div>
            </div>
            <div class="pr-info row">
                <div class="pr-infor-left col-3">
                    <span>Trích yếu:</span>
                </div>
                <div class="pr-infor-right col-9">
                    <span>${quyetDinh.trichYeu}</span>
                </div>
            </div>
            <div class="pr-info row">
                <div class="pr-infor-left col-3">
                    <span>Cơ quan ban hành:</span>
                </div>
                <div class="pr-infor-right col-9">
                    <span>${quyetDinh.coQuanBanHanh == null ? "..." : quyetDinh.coQuanBanHanh.tenCoQUan}</span>
                </div>
            </div>
            <div class="pr-info row">
                <div class="pr-infor-left col-3">
                    <span>Ngày ban hành:</span>
                </div>
                <div class="pr-infor-right col-3">
                    <span>${quyetDinh.ngayBanHanh.length === 3 ? quyetDinh.ngayBanHanh[2] + "/" + quyetDinh.ngayBanHanh[1] + "/" + quyetDinh.ngayBanHanh[0] : "..."}</span>
                </div>
                <div class="pr-infor-right col-3" style="background: #cccccc;">
                    <span>Thời gian hiệu lực:</span>
                </div>
                <div class="pr-infor-right col-3">
                    <span>${quyetDinh.namDau + "-" + quyetDinh.namCuoi}</span>
                </div>
            </div>
            <div class="pr-info row">
                <div class="pr-infor-left col-3">
                    <span>Người ký:</span>
                </div>
                <div class="pr-infor-right col-3">
                    <span>${quyetDinh.nguoiKy}</span>
                </div>
                <div class="pr-infor-right col-3" style="background: #cccccc;">
                    <span>Chức vụ:</span>
                </div>
                <div class="pr-infor-right col-3">
                    <span>${quyetDinh.chucVu}</span>
                </div>
            </div>
            <div class="pr-info row">
                <div class="pr-infor-left col-3">
                    <span>Tệp đình kèm theo:</span>
                </div>
                <div class="pr-infor-right col-9">
                    <span><a href=${quyetDinh.duongDanTep}>${quyetDinh.soQuyetDinh}</a></span>
                </div>
            </div>`;
}
