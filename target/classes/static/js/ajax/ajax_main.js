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

            getInfoUserDangNhap(result);
            window.location.href = "home";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Tên tài khoản hoặc mật khẩu không chính xác")
            console.log(errorThrown);
        }
    })

}

function getInfoUserDangNhap(result) {
    $.ajax({
        type: 'GET',
        dataType: "json",
        headers: {
            "Authorization": result,
        },
        url: URL_API + "v1/user/profile",
        timeout: 30000,
        success: function (data) {
            localStorage.setItem("infoUserLogin", JSON.stringify(data));
            console.log(data)

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function logOut() {
    $("#logOut").click(function () {
        localStorage.clear();
        $("#lockhome").show();
        $("#nameUser").hide();
        window.location.href = "home";
    })
}

// lấy thông tin đăng kí post lên sever
function checkResign() {
    let user = {
        "password": $("#pass1").val(),
        "fullName": $("#fullname").val(),
        "email": $("#emailSign").val(),
        "address": $("#address").val(),
        "sdt": $("#phoneNumber").val(),
        "cmt": $("#numberCMT").val(),
        "ngayCap": $("#dateCMT").val(),
        "noiCap": $("#addCMT").val()
    }
    console.log(user);
    $.ajax({
        type: 'POST',
        data: JSON.stringify(user),
        url: URL_API + "v1/public/user/register",
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            sendEmailXacThucTaiKhoan(result.id)
            // localStorage.setItem("infoUserResigter", JSON.stringify(result));
            window.location.href = "home";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Email đã được sử dụng ")
            console.log(errorThrown);
        }
    })
}

// gửi email xác thực tài khoản
function sendEmailXacThucTaiKhoan(id,email) {
ajaxCallGet("api/v1/public/email?email="+email+"&header=Xác thực tài khoản"+"&content=Xác thực tài khoản").then(data=>{
    console.log(data)
})
}

// check xem đã đăng nhập hay chưa để add tên đăng nhập
function checkStatusLogin() {
    let tmp = "";
    let tmp2 = "";

    if (localStorage.getItem("infoUserResigter") !== null) {
        let user = JSON.parse(localStorage.getItem("infoUserResigter"));
        tmp = `
  <a  class="user-name show" title="Tên Chủ tài Khoản">
                            <div class="usn-wp">
                                <div class="usn-img">
                                    <img src="resources/img/user2.png" alt="">
                                </div>
                                <span>${user.fullName}</span>
                            </div>
                        </a>
`;
        tmp2 = `
          <a  id="logOut" class="icon iconlogout show" title="Đăng Xuất">
            <div class="ihwp">
                <i class="fas fa-sign-out-alt" title="Đăng Xuất"></i>
            </div>
        </a>
        `;
        $("#lockhome").hide();
        $("#header").append(tmp2);
        $("#addUser").append(tmp);
        logOut();
    } else if (localStorage.getItem("infoUserLogin") !== null) {
        let user = JSON.parse(localStorage.getItem("infoUserLogin"));

        tmp = `
  <a  id="nameUser" class="user-name show" title="Tên Chủ tài Khoản">
                            <div class="usn-wp">
                                <div class="usn-img">
                                    <img src="resources/img/user2.png" alt="">
                                </div>
                                <span>${user.fullName}</span>
                            </div>
                        </a>
`;
        tmp2 = `
          <a  class="icon iconlogout show" id="logOut" title="Đăng Xuất">
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

// check tất cả các ô đã được điền hay chưa
function checkpass() {
    $("#submitResign").click(function () {
        $(".sicitem-wp").map(function () {
            if ($(this).children('input').val() == "") {
                $(this).find(".error").css({"display": "inline"})
            } else if ($(this).children('input').val() !== "") {
                $(this).find(".error").css({"display": "none"})
            }
        });
        // trả về các phần tử chưa nhập
        let arr = $(" .sicitem-wp").map(function () {
            return $(this).children('input').val() == "";
        })
        let check = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == true) {
                check = false;
                break;
            } else {
                check = true;
            }
        }
        if (check == true) {
            if ($("#sicright .sicitem-wp").last().children('input').val() !== "") {
                if ($("#pass1").val() == $("#pass2").val() && $("#pass1").val() != "") {
                    if ($("#emailSign").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {
                        if ($("#phoneNumber").val().match("(09|01[2|6|8|9])+([0-9]{8})\\b")) {
                            checkResign();
                        } else {
                            alert("Sai định dạng số điện thoại");
                        }
                        ``
                    } else {
                        alert("Sai định dạng email vui lòng nhập lại")
                    }
                } else {
                    alert("Mật khẩu không khớp vui lòng nhập lại");
                }
            }
        }
    });
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
