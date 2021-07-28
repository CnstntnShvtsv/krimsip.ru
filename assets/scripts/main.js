// AOS
$(document).ready(function () {
    AOS.init();
});

// jBox
$(document).ready(function () {
    new jBox('Image');
});

// Гамбургер (кнопка меню):
$(document).ready(function () {
    $('.header__toggler').click(function () {
        $(this).toggleClass('active');
        $('.header__nav--mobile').slideToggle();
    });
});

$(window).resize(function () {
    if ($(window).width() > 1200) {
        $('.header__toggler').removeClass('active');
        $('.header__nav--mobile').css('display', 'none');
    }
}).resize();

// Slick Слайдер:
$(document).ready(function () {
    $('.main__slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        fade: true,
        speed: 1000,
        arrows: false,
        dots: true
    });
});
