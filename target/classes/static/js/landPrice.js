$(document).ready(function () {
    // Click item-left:nav-link in landprice.html
    var navlink = $(".nav-link")
    for (let i = 0; i < navlink.length; i++) {
        $(navlink[i]).click(function (e) {
            e.preventDefault();
            $(".landprice").addClass("show");
            $(".ver").addClass("show");
            $(this).removeClass("noactive");
            $(this).parent().siblings().children().addClass("noactive");
        });
    }
    // Select 2 Plugin Jquery in landprice.html
    $(".mselect").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#click-qd").click(function () {
        $("#block-price-bottom").fadeOut();
        $("#block-price-bottom").fadeOut(3000);
        $(".class-int").css({"display": "inline"})
    });
    $(".class-int").click(function () {
        $("#block-price-bottom").fadeIn(1000);
    });
    PhanPageLandprice(window.location.href);

});

function PhanPageLandprice(url) {
    if (url.indexOf("gia-dat-nong-nghiep") > 0) {
        callNongNghiep();
    } else if (url.indexOf("gia-dat-phi-nong-nghiep")) {
        callPhiNongNghiep();
    }else {
        console.log("lỗi")
    }
}



