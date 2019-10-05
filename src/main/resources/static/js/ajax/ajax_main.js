$(document).ready(function () {
    checkLogin();
    checkpass();
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
            alert("ok");
        } else {
            alert("Vui lòng nhập đúng định dạng email.");
        }
    });
}

function checkResign() {

    let user = {
        "": $("#name").val(),
        "": $("#pass1").val(),
        "": $("#pass2").val(),
        "": $("#fullname").val(),
        "": $("#address").val(),
        "": $("#emailSign").val(),
        "": $("#phoneNumber").val(),
        "": $("#numberCMT").val(),
        "": $("#dateCMT").val(),
        "": $("#addCMT").val(),

    }
    $.ajax({
        type: "method",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {

        }
    });

}

function checkpass() {
    $("#submitResign").click(function () {
        if ($("#pass1").val() === $("#pass2").val()) {
            console.log("1")
        } else {
            alert("Mật khẩu không khớp vui lòng nhập lại");
        }
        if ($("#emailSign").val().match("^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$")) {
            console.log("2")
        } else {
            alert("Sai định dạng email vui lòng nhập lại")
        }
        if ($("#phoneNumber").val().match("(09|01[2|6|8|9])+([0-9]{8})\\b")) {
            console.log("3")
        } else {
            alert("Sai định dạng số điện thoại");
        }


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
        url: URL_API+url,
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

async function ajaxCallPost(url) {
    let rs = null;
    await $.ajax({
        type: 'GET',
        dataType: "json",
        url: URL_API+ url,
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
                    <span>${quyetDinh.ngayBanHanh.split("-").length === 3 ? quyetDinh.ngayBanHanh.split("-")[2]+"/"+quyetDinh.ngayBanHanh.split("-")[1]+"/"+quyetDinh.ngayBanHanh.split("-")[0] : "..."}</span>
                </div>
                <div class="pr-infor-right col-3" style="background: #cccccc;">
                    <span>Thời gian hiệu lực:</span>
                </div>
                <div class="pr-infor-right col-3">
                    <span>${quyetDinh.namDau+"-"+quyetDinh.namCuoi}</span>
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
