window.addEventListener('load', function() {
    var $botton = document.querySelector('.toggle-menu-botton');
    var $menu = document.querySelector('.header-site-menu');
    $botton.addEventListener('click', function() {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});
$(function() {
    $(window).scroll(function() {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});