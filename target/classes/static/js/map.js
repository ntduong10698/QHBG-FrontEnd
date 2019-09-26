
$(document).ready(function () {
    $(".bl-v2-left >ul>li>span").click(function () {
        $(this).siblings(".sect-bdqh-layer-2").toggle("d-inline");
        $(this).toggleClass("bg-green");
    });
    $(".sect-bdqh-layer-2 >table>tbody>tr>td>i").click(function () {
        $(".bl-v2").toggleClass("d-flex");
    })
    $(".bl-v2>i").click(function () {
        $(".bl-v2").removeClass("d-flex");
        $(".bl-v2").toggleClass("d-none");
    });
    $(".content-form-search>i").click(function () {
        $(".form-search-toado").toggle();
    });
});