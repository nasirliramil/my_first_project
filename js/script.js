$(function() {
    $(".header-navbar-logo").click(function() {
        $(".header-navbar").slideToggle();
    });
    $(window).resize(function() {
        if ($(this).width() > 767.98) {
            $(".header-navbar").css("display","");
        }
    });
})
