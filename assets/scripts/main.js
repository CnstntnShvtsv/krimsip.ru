// AOS
$(document).ready(function () {
    AOS.init();
});

// jBox
$(document).ready(function () {
    new jBox('Image');
});


// Кнопка наверх:
$(document).ready(function () {
    var amountScrolled = 200;

    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// Выпадающее меню:
$(document).ready(function () {
    $('.dropdown').click(function () {
        $(this).toggleClass('active');
        $(this).find('.dropdown__menu').slideToggle();
    });
});

// Выпадающее меню (закрыть по клику вне окна):
$(document).mouseup(function (e) {
    var dropdownActive = $('.dropdown.active');
    if (e.target != dropdownActive[0] && dropdownActive.has(e.target).length === 0) {
        $('.dropdown.active').removeClass('active').find('.dropdown__menu').slideUp();
    }
});


// Yandex Map
$(document).ready(function () {
    $('.map__overlay').click(function () {
        $('.map').addClass('active');
    });

    $('.map iframe').mouseleave(function () {
        $('.map').removeClass('active');
    });
});

// Счетчики
$(document).ready(function () {
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
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

// Модальное окно
$(document).ready(function () {
    $('.callback__button').click(function () {
        $('.modal-callback').fadeIn();
    });

    $('.advice__button').click(function () {
        $('.modal-advice').fadeIn();
    });

    $('.form-submit').click(function () {
        $('.modal').delay(500).fadeOut();
    });

    $('.close-button').click(function () {
        $('.modal').fadeOut();
    });
});

// Slick Слайдеры:
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
