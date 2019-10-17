$(document).ready(function () {
    $("#ic-lp").click(function () {
        $(".ip-lp").siblings().removeClass("show");
        $(".ip-lp").addClass("show");
    });
    $("#ic-pl").click(function () {
        $(".ip-pl").siblings().removeClass("show");
        $(".ip-pl").addClass("show");
    });
    $("#ic-de").click(function () {
        $(".ip-de").siblings().removeClass("show");
        $(".ip-de").addClass("show");
    });
});