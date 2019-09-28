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
=======
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

// function callThongKeQuyHoach(mkh, idTinhHuyen) {
//     let url = `v1/public/read-excel/bieu_CH03/find-by-mkh?mkh=${mkh}&idTinhHuyen=${idTinhHuyen}`;
//     return ajaxCallGet(url);
// }

