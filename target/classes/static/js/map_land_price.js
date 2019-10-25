//set high map
$(function () {
    var height = $(window).height();
    let heightMap = height - $("footer").height() - 60 - 45; // 60 padding footer 45 header
    if (heightMap > 300) {
        $(".block-main-qh").height(heightMap); //set height main map
        heightMap = heightMap - 108; //108 = 40 + 34 x 2 40, tititle so do hien thi, 40 titile xa phuong
        $("#viewDanhSachXaHuyen").css("max-height",heightMap);
    }
    $(window).resize(function () {
        height = $(window).height();
        heightMap = height - $("footer").height() - 60 - 45; // 60 padding footer 45 header
        if (heightMap > 300) {
            $(".block-main-qh").height(heightMap); //set height main map
            heightMap = heightMap - 108; //108 = 40 + 34 x 2 40, tititle so do hien thi, 40 titile xa phuong
            $("#viewDanhSachXaHuyen").css("max-height",heightMap);
        }
    })

    $(".tbdetailf .tbdfimg img").click(function () {
        $(".tbdetailf").removeClass("show");
    })
    //end close table full
})
//end set high map