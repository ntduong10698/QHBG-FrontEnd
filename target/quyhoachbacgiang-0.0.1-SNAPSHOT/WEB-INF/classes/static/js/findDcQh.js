$(document).ready(function () {
    $(document).ready(function () {
        // Select 2 Plugin Jquery in landprice.html
        $("#dp-drop7").select2( {
            placeholder: "--- Tất cả ---",
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
});