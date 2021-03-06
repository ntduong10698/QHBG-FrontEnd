$(document).ready(function () {
    setMenuProject();
    activeMenu();
    checkLogin();
    checkpass();
    checkStatusLogin();
    callThongKeTruyCap().then(data => {
        console.log("plus");
        $("#tk-online").html(data[0].truyCap);
        $("#tk-tong").html(formatNumber(data[1].truyCap,'.','.'));
        // setImageThongKe(data[1].truyCap);
    }).then(err => {
        console.log(err);
    })
    $(window).on('beforeunload', function(){
        callThongKeTruyCapTru().then(rs => {
            console.log("minus");
        }).catch(err => {
            console.log(err);
        });
    });
});

async function ajaxCall(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: url,
        timeout: 30000,
        success: function (result) {
            rs = result;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    return rs;
}

function checkLogin() {
    $("#email").change(function () {
        if ($("#email").val() === "") {
            $("#email").parent().children().eq(1).css({"display": "inline"})
            $("#email").parent().children().eq(2).css({"display": "none"})
        } else if ($("#email").val() !== "") {
            $("#email").siblings().eq(1).css({"display": "none"})
            if ($("#email").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {
                $("#email").parent().children().eq(2).css({"display": "none"})
            } else {
                $("#email").parent().children().eq(2).css({"display": "inline"})
                $("#email").parent().children().eq(1).css({"display": "none"})
            }
        }
    })
    $("#password").change(function () {
        if ($("#password").val() === "") {
            $("#password").parent().children().eq(1).css({"display": "inline"})
        } else {
            $("#password").parent().children().eq(1).css({"display": "none"})
        }
    })
    $("#submit-log").click(function () {
        if ($("#email").val()==""){
            $("#email").parent().children().eq(1).css({"display": "inline"})
            $("#email").parent().children().eq(2).css({"display": "none"})

        } else if($("#email").val()!=="" ){
            $("#password").parent().children().eq(1).css({"display": "none"})
            if ($("#email").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {
                $("#email").parent().children().eq(1).css({"display": "none"})
                $("#email").parent().children().eq(2).css({"display": "none"})

                if ($("#password").val() ===""){
                    $("#password").parent().children().eq(1).css({"display": "inline"})
                } else {
                    $("#password").parent().children().eq(1).css({"display": "none"})
                    postInfoUserDangNhap();
                }
            } else {
                $("#email").parent().children().eq(1).css({"display": "none"})
                $("#email").parent().children().eq(2).css({"display": "inline"})
            }
        }


    });
}

function postInfoUserDangNhap() {

    let dataUser = {
        "email": $("#email").val(),
        "password": $("#password").val()
    }
    async :false;
    $.ajax({
        type: 'POST',
        data: JSON.stringify(dataUser),
        url: URL_API + "v1/public/user/login",
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            if (result == "") {
                // alert("Vui lòng kiểm  email để kích hoạt tài khoản");
                viewAlter(2,"Vui lòng kiểm  email để kích hoạt tài khoản");
            } else {
                getInfoUserDangNhap(result);
                window.location.href = "home";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // alert("Tên tài khoản hoặc mật khẩu không chính xác");
            viewAlter(2,"Tên tài khoản hoặc mật khẩu không chính xác");
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
            sendEmailXacThucTaiKhoan(result.id, result.email)
            // alert("Vui lòng kiểm tra email để xác thực tài khoản");
            viewAlter(2,"Vui lòng kiểm tra email để xác thực tài khoản");
            // localStorage.setItem("infoUserResigter", JSON.stringify(result));
            window.location.href = "home";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // alert("Email đã được sử dụng ");
            viewAlter(3,"Email đã được sử dụng");
            console.log(errorThrown);
        }
    })
}
// gửi email xác thực tài khoản
function sendEmailXacThucTaiKhoan(id, email) {
    ajaxCallGet("v1/public/email?email=" + email + "&header=Xác thực tài khoản" + `&content= Nhấn vào liên kết để kích hoạt tài khoản của bạn: ${getUrlEmailActive()}/xac-thuc?id=` + id).then(data => {

    });
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
    // check change ở ô input
    $("#pass2").change(function () {
        if ($("#pass1").val() !== $("#pass2").val() && $("#pass1").val() != "" && $("#pass2").val() != "") {
            $("#pass2").siblings().children().eq(1).css({"display": "none"})
            $("#pass2").siblings().children().eq(2).css({"display": "inline"})
        } else {
            $("#pass2").siblings().children().eq(2).css({"display": "none"})
        }
    })
    $("#fullname").change(function () {
        if ($("#fullname").val() == "") {
            $("#fullname").siblings().children().eq(1).css({"display": "inline"})
        } else {
            $("#fullname").siblings().children().eq(1).css({"display": "none"})
        }
    })
    $("#pass1").change(function () {

        if ($("#pass1").val() == "") {
            $("#pass1").siblings().children().eq(1).css({"display": "inline"})
        } else {
            $("#pass1").siblings().children().eq(1).css({"display": "none"})
        }
    })
    $("#emailSign").change(function () {
        if ($("#emailSign").val() === "") {
            $("#emailSign").siblings().children().eq(1).css({"display": "inline"})
            $("#emailSign").siblings().children().eq(2).css({"display": "none"})
        } else if ($("#emailSign").val() !== "") {
            $("#emailSign").siblings().children().eq(1).css({"display": "none"})
            if ($("#emailSign").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {
                $("#emailSign").siblings().children().eq(2).css({"display": "none"})
            } else {
                $("#emailSign").siblings().children().eq(2).css({"display": "inline"})
            }
        }
    })
    $("#address").change(function () {
        if ($("#address").val() == "") {
            $("#address").siblings().children().eq(1).css({"display": "inline"})
        } else {
            $("#address").siblings().children().eq(1).css({"display": "none"})
        }
    })
    $("#phoneNumber").change(function () {
        if ($("#phoneNumber").val() === "") {
            $("#phoneNumber").siblings().children().eq(1).css({"display": "inline"})
            $("#phoneNumber").siblings().children().eq(2).css({"display": "none"})
        } else if ($("#phoneNumber").val() !== "") {
            $("#phoneNumber").siblings().children().eq(1).css({"display": "none"})
            if ($("#phoneNumber").val().match("(09|01[2|6|8|9])+([0-9]{8})\\b")) {
                $("#phoneNumber").siblings().children().eq(2).css({"display": "none"})
            } else {
                $("#phoneNumber").siblings().children().eq(2).css({"display": "inline"})
            }
        }
    })
    $("#numberCMT").change(function () {
        if ($("#numberCMT").val() == "") {
            $("#numberCMT").siblings().children().eq(1).css({"display": "inline"})
        } else {
            $("#numberCMT").siblings().children().eq(1).css({"display": "none"})
        }
    })
    $("#dateCMT").change(function () {
        if ($("#dateCMT").val() == "") {
            $("#dateCMT").siblings().children().eq(1).css({"display": "inline"})
        } else {
            $("#dateCMT").siblings().children().eq(1).css({"display": "none"})
        }
    })
    $("#addCMT").change(function () {
        if ($("#addCMT").val() == "") {
            $("#addCMT").siblings().children().eq(1).css({"display": "inline"})
        } else {
            $("#addCMT").siblings().children().eq(1).css({"display": "none"})
        }
    })
    $("#submitResign").click(function () {
        $(".sicitem-wp").map(function () {
            if ($(this).children('input').val() == "") {
                $(this).find(".error").eq(0).css({"display": "inline"})
            } else if ($(this).children('input').val() !== "") {
                $(this).find(".error").eq(0).css({"display": "none"})
            }
        });
        // trả về các phần tử chưa nhập
        let arr = $(" .sicitem-wp").map(function () {
            return $(this).children('input').val() == "";
        })
        // kieerm tra xem con phan tu nao chua nhap khong
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
            checkResign();
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
                    <span>${quyetDinh.ngayBanHanh.split("-").length === 3 ? quyetDinh.ngayBanHanh.split("-")[2] + "/" + quyetDinh.ngayBanHanh.split("-")[1] + "/" + quyetDinh.ngayBanHanh.split("-")[0] : "..."}</span>
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
                    <span>${quyetDinh.duongDanTep == null ? '' : `<a href=${quyetDinh.duongDanTep} target="_blank">${quyetDinh.soQuyetDinh}</a>`}</span>
                </div>
            </div>`;
}

function callThongKeTruyCap() {
    return ajaxCallGet('v1/public/thong-ke-truy-cap');
}

function callThongKeTruyCapTru() {
    return ajaxCallGet('v1/public/thong-ke-truy-cap?plus=false');
}

function callHuyen() {
    return ajaxCallGet('v1/public/huyen/find-by-ten-tinh?ten-tinh=Bắc Giang');
}

function activeMenu() {
    let href = window.location.href;
    if (href.indexOf("gia-dat") > -1) {
        $("ul.header__menu > li:nth-child(2)").css("background","#0063ac");
    }
    if (href.indexOf("quy-hoach") > -1) {
        $("ul.header__menu > li:nth-child(3)").css("background","#0063ac");
    }
    if (href.indexOf("ke-hoach") > -1) {
        $("ul.header__menu > li:nth-child(4)").css("background","#0063ac");
    }
    if (href.indexOf("du-an") > -1) {
        $("ul.header__menu > li:nth-child(5)").css("background","#0063ac");
    }
    if (href.indexOf("quyet-dinh") > -1) {
        $("ul.header__menu > li:nth-child(6)").css("background","#0063ac");
    }
    if (href.indexOf("huong-dan") > -1) {
        $("ul.header__menu > li:nth-child(7)").css("background","#0063ac");
    }
    if (href.indexOf("gop-y") > -1) {
        $("ul.header__menu > li:nth-child(8)").css("background","#0063ac");
    }
}

function setImageThongKe(tongTruyCap) {
    tongTruyCap = tongTruyCap + '';
    let arr = tongTruyCap.trim().split("");
    arr.reverse();
    if (arr.length < 6) {
        arr.map((data, index) => {
            $(`.image-number-couter img:nth-child(${6 - index})`).attr('src',`/resources/img/icons8-${data}-100.png`);
        })
    }
}

function getUrlEmailActive() {
    let host = window.location.hostname;
    let port = window.location.port;
    console.log(port);
    if (port.length > 0) {
        if (host === 'localhost' || host === '127.0.0.1') {
            return "http://"+host+":"+port;
        } else{
            return  "http://"+host+":"+port+"/qh_bacgiang_gov_vn";
        }
    } else {
        return "https://www."+window.location.hostname;
    }
}

function getGioiThieu(id) {
    return ajaxCallGet(`v1/public/gioi-thieu/find-by-id?id=${id}`);
}

async function getMenuMap() {
    return ajaxCallGet(`v1/public/menu-ban-do/all`);
}

function setMenuProject() {
    getMenuMap().then(listMenu => {
        listMenu.map(menu => {
            let viewHtml = '';
            let {menuSmalls, thuTuUuTien, loaiBanDo} = menu;
            let textUrl = loaiBanDo === "qh" ? 'quy-hoach': loaiBanDo === "kh" ? "ke-hoach" : thuTuUuTien == 11 ? "ban-do-gia-dat" : "ban-do-gia-dat-khu-vuc";
            if (menuSmalls !== null && menuSmalls.length > 0) {
                $(`li[data-name='${loaiBanDo}-${thuTuUuTien}'] a`).append('<i class="fas fa-caret-right"></i>');
                viewHtml = `<ul class=${thuTuUuTien == 0 || thuTuUuTien == 11 || thuTuUuTien == 12? "submenu-lv2": "submenu-lv3"}>`;
                menuSmalls.map(item => {
                    if (item.status != 0) {
                        viewHtml += `<li><a href="${textUrl}?map=${thuTuUuTien}&nam=${item.name}">
                                <i class="fas fa-angle-double-right"></i>
                                <span>${item.name}</span>
                                </a>
                            </li>`;
                    }
                })
                viewHtml += "</ul>";
                $(`li[data-name='${loaiBanDo}-${thuTuUuTien}']`).append(viewHtml);
                $(`li[data-name='${loaiBanDo}-${thuTuUuTien}'] > a`).attr("href",`${textUrl}?map=${thuTuUuTien}&nam=${menuSmalls[0].name}`);
                //set Link parent
            }
            $(`li[data-link='QuyHoach'] > a`).attr("href",$(`li[data-link='QuyHoachTinh'] > a`).attr("href"));
            $(`li[data-link='QuyHoachHuyen'] > a`).attr("href",$(`li[data-link='QuyHoachHuyen'] .submenu-lv2 li:nth-child(1) > a`).attr("href"));

            $(`li[data-link='KeHoach'] > a`).attr("href",$(`li[data-link='KeHoachTinh'] a`).attr("href"));
            $(`li[data-link='KeHoachHuyen'] > a`).attr("href",$(`li[data-link='KeHoachHuyen'] .submenu-lv2 li:nth-child(1) > a`).attr("href"));
        })
    }).catch(err => {
        console.log(err);
    })
}
