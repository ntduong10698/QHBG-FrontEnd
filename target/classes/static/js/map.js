
$(document).ready(function () {
    $(".bl-v2-left >ul>li>span").click(function () {
        $(this).siblings(".sect-bdqh-layer-2").toggle("d-inline");
        $(this).toggleClass("bg-green");
    });
    $(".sect-bdqh-layer-2 >table>tbody>tr>td>i").click(function () {
        $(".bl-v2").toggleClass("d-flex");
    })
    $(".bl-v2>i").click(function () {
        $(".bl-v2").css("display","none");
    });
    $(".form-search-toado").css("display","none"); // off table search
    $('#inputSearchMap').keyup(function () {
        this.value = this.value.toUpperCase();
    });
    $(".content-form-search > .fa-times-circle").click(function () {
        $(".form-search-toado").css("display","none");
    })
    $(".block-main-l2 .bl-v2-left > .fa-times-circle").click(function () {
        $(".block-main-l2").css("display","none");
    })
    // $(".content-form-search>i").click(function () {
    //     $(".form-search-toado").toggle();
    // });

    //set high map
    var height = $(window).height();
    // let heightMap = height - $("footer").height() - 60 - 45; // 60 padding footer 45 header
    let heightMap = height - 205; //fix sau 16 height gra, 45 header
    heightMap = heightMap > 300 ? heightMap : 300;
    $(".block-main-qh").height(heightMap); //set height main map
    heightMap = heightMap - 108; //108 = 40 + 34 x 2 40, tititle so do hien thi, 40 titile xa phuong
    $("#viewDanhSachXaHuyen").css("max-height",heightMap*0.4);
    $(".viewTimKiemDat").css("max-height",heightMap*0.6 - 35);
    $(window).resize(function () {
        height = $(window).height();
        // let heightMap = height - $("footer").height() - 60 - 45; // 60 padding footer 45 header
        let heightMap = height - 205; //fix sau 16 height gra, 45 header
        heightMap = heightMap > 300 ? heightMap : 300;
        $(".block-main-qh").height(heightMap); //set height main map
        heightMap = heightMap - 108; //108 = 40 + 34 x 2 40, tititle so do hien thi, 40 titile xa phuong
        $("#viewDanhSachXaHuyen").css("max-height",heightMap*0.4);
        $(".viewTimKiemDat").css("max-height",heightMap*0.6 - 35);
    })
    //end set high map

    //close table full
    $(".tbdetailf .tbdfimg img").click(function () {
        $(".tbdetailf").removeClass("show");
    })
    //end close table full

    //click view tableInfoSoild
    $("a#clickViewTableInfoSoild").click(function () {
        $(".tbdetailf").addClass("show");
        $(".block-main-l2").css("display", "none");
        return false;
    })

    $("#nav-hientrang-tab").click(function () {
        $("#viewHienTrang").css("display","block");
        $("#viewQuyHoach").css("display","none");
    })

    $("#nav-quyhoach-tab").click(function () {
        $("#viewQuyHoach").css("display","block");
        $("#viewHienTrang").css("display","none");
    })
});