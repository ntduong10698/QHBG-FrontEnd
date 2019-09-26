const ARR_HUYEN = ['TPBG', 'Hiep_Hoa', 'Yen_Dung', 'Luc_Nam', 'Son_Dong', 'Lang_Giang', 'Viet_Yen', 'Tan_Yen', 'Luc_Ngan', 'Yen_The'];

$(document).ready(function () {

    // Click Account Header
    $("a.icon.iconacc").click(function () {
        $(".m-loginsignin").addClass("show")
        $(".d-login").addClass("show")
    });
    $("a.out").click(function () {
        $(".m-loginsignin").removeClass("show")
        $(".d-signin").removeClass("show")
    });
    $(".licsi").click(function () {
        $(".d-login").removeClass("show")
        $(".d-signin").addClass("show")
    });
    $(".sibcl").click(function (e) {
        $(".d-login").addClass("show")
        $(".d-signin").removeClass("show")
    });
    $(".icon.iconlogout").click(function(){
        $(this).removeClass("show");
        $(".user-name").removeClass("show");
        $(".icon.iconacc").removeClass("hide");
    })
    // Scroll Fixtop header
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if(scroll > 30){
            $("header").css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'z-index': '500',
                'box-shadow':'0px 0px 5px 0px rgba(0,0,0,0.75)'
            });
        }else{
            $("header").css({
                'position': 'static',
                'box-shadow':'none'
            });
        }
    });
});

