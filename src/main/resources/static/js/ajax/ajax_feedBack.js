$(function () {
    clickSendFeedBack();
})

function testInputEmail(str) {
    return str == null ? null : testInput(str, "^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$");
}

function sendFeedBack(email, header, content, name) {
    let obj = {
        daTraLoi: false,
        email: email,
        ngayGopY: "",
        noiDung: content,
        noiDungTraLoi: "",
        status: true,
        tenNguoiGui: name,
        tieuDe: header,
        tieuDeTraLoi: ""
    }
    let url = `v1/public/gop-y/upload`;
    return ajaxCallPost(url, obj);
}

function clickSendFeedBack() {
    $(".asendfb").click(function () {
        let name = $("#gop-y-name").val();
        let email = $("#gop-y-email").val();
        let tieuDe = $("#gop-y-header").val();
        let noiDung = $("#gop-y-content").val();
        console.log(name +" " + email + " "+ tieuDe + " "+ noiDung);

        let checkName = name == '' || name == null ? "block" : "none";
        let checkEmail = testInputEmail(email) == null ? "block" : "none";
        let checkNoiDung = noiDung == '' || noiDung == null ? "block" : "none";
        let checkTieuDe = tieuDe == '' || tieuDe == null ? "block" : tieuDe.length > 100 ? "block" : "none";

        $(".pfl-content .sicitem-wp:nth-child(1) .gop-y-error").css("display",checkName);
        $(".pfl-content .sicitem-wp:nth-child(2) .gop-y-error").css("display",checkEmail);
        $(".pfl-content .sicitem-wp:nth-child(3) .gop-y-error").css("display",checkNoiDung);
        $(".pfl-content .sicitem-wp:nth-child(4) .gop-y-error").css("display",checkTieuDe);

        if (checkName === "none" && checkEmail === "none" && checkNoiDung === "none" && checkTieuDe === "none") {
            viewLoadingGif();
            sendFeedBack(email, tieuDe, noiDung, name).then(rs => {
                alert("Gửi phản hồi thành công!");
                hideLoadingGif();
            }).catch(err => {
                console.log(err);
            })
        }

        return false;
    })
}