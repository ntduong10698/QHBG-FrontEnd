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
    $(".mselect").select2( {
        placeholder: "--- Gõ để tìm kiếm ---",
        allowClear: true
    } );
});