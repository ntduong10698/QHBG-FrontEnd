$(document).ready(function () {
    // Select 2 Plugin Jquery in landprice.html
    $("#dp-drop5").select2( {
        placeholder: "--- Chọn chức năng đất ---",
        allowClear: true
    } );
    $("#dp-drop6").select2( {
        placeholder: "--- Chọn đơn vị ---",
        allowClear: true
    } );
    // Scroll Fix Filter
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