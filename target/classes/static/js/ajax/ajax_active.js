$(document).ready(function () {
    let url = window.location.href.split("=");
    let id = url[url.length - 1]
    console.log(id)
    active(id);
    console.log("hhihihihihihi");
});

function active(id) {
    $.ajax({
        type: "PUT",
        url: URL_API + "v1/public/user/active?b35d4a4d47b59fd385d747e7c87fa0d1=" + id,
        timeout: 30000,
        contentType: "application/json",
        success: function (result) {
            console.log((result));
            alert("Xác thực tài khoản thành công. Vui lòng đăng nhập lại")
            window.location.href = "home";
        },
    }).catch(err => {
        console.log(err);
    });


}