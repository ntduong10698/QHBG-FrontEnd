$(document).ready(function () {
    // Select 2 Plugin Jquery in landprice.html
    $(".dp-drop").select2( {
        placeholder: "--- Gõ để tìm kiếm ---",
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