var checkLandPrice; // 1 la nong nghiep, 2 la phi nong nghiep

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
    $("#dp-drop8").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop9").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop9").val("0");
    $("#dp-drop9").select2().trigger('change');

    $("#dp-drop10").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop11").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#dp-drop12").select2({
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    });
    $("#click-qd").click(function () {
        $("#block-price-bottom").fadeOut();
        $("#block-price-bottom").fadeOut(3000);
        $(".class-int").css({"display": "inline"})
    });
    $(".table-dat  tbody tr td span>span").click(function () {
        $("#block-price-bottom").toggleClass("d-inline");
    });
    $("#block-price-bottom>div>i").click(function () {
        $("#block-price-bottom").toggleClass("d-none");
    });

    $("#priceDatMin").on('input',function () {
        // xử lý sau
        // setTimeout(function () {
        //     $("#priceDatMin").val($("#priceDatMin").val());
        // },100)
    })
});

// function callAjaxPnnNn(checkLandPrice) {
//     let href = window.location.href;
//     if (href.indexOf("phi-nong-nghiep") > -1) {
//         checkLandPrice = 2;
//         callPhiNongNghiep(2);
//     } else {
//         checkLandPrice = 1;
//         callNongNghiep(1);
//     }
// }





