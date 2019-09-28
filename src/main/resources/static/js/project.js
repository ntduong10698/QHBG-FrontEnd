$(document).ready(function () {
    $("#dp-drop3.pp-drop").select2( {
        placeholder: "--- Tất cả ---",
        allowClear: true
    } );
    $("#dp-drop4.pp-drop").select2( {
        placeholder: "Dự án trong quy hoạch",
        allowClear: true
    } );

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if(scroll > 60){
            $(".dp-filter").css({
                'position': 'fixed',
                'top': '35px',
                'left': '0',
                'z-index': '1004',
            });
        }else{
            $(".dp-filter").css({
                'position': 'static'
            });
        }
    });
});