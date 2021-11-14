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

// Загрузить все портфолио:
$(document).ready(function () {
    $('.button--page-portfolio').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('Скрыть проекты');
            $('.portfolio__hidden').removeClass('active');
        } else {
            $(this).text('Показать все проекты');
            $('.portfolio__hidden').addClass('active');
        }
    });
});

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

// Модальные окна:
$(document).ready(function () {
    $('.feedback__item').click(function () {
        let videoId = $(this).find('.feedback__play').attr('data-video');

        $('.iframe__wrapper').fadeIn();
        $('.iframe__wrapper iframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');

        $('body').css('overflow', 'hidden');
    });

    $('.iframe__wrapper, .feedback__close').click(function () {
        $('.iframe__wrapper').fadeOut();
        $('.iframe__wrapper iframe').attr('src', '');

        $('body').css('overflow', 'auto');
    });
});

// MarQuiz (кнопка "Пройти опрос"):
$(document).ready(function () {
    $('.quiz__inner iframe').find('.assistant-mobile__block').addClass('active');

    $('.button--contact-us').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.quiz__wrapper').fadeIn();
            $('body').css('overflow', 'hidden');
        } else {
            $('.quiz__wrapper').fadeOut();
            $('body').css('overflow', 'auto');
        }
    });

    $('.quiz__wrapper, quiz__close').click(function () {
        $(this).fadeOut();
        $('.button--contact-us').removeClass('active');
        $('body').css('overflow', 'auto');
    });
});
