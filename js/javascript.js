/*global, $*/

$(function () {
    "use strict";

    /* Scroll To Top - Javascript
    ------------------------------------------------------*/
    function scrollButton(scrollButton, sectionScrolling) {
        $(scrollButton).on('click', function() {
            $('html, body').animate({
                scrollTop: $(sectionScrolling).offset().top
            }, 2000);
        });
    }
    scrollButton('section.scroll-bottom-over', '.ads');
    scrollButton('.box-ad button', '.order');
    /*End*/


    /* Scroll To Top For HTML - Javascript
    ------------------------------------------------------*/
    let scrollToTop = $('.scroll-top');

    scrollToTop.fadeOut();

    scrollToTop.css({
        top: $('.order').offset().top + 300
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > $('.order').offset().top) {

            scrollToTop.fadeIn(500);
        } else {
            scrollToTop.fadeOut(500);
        }
    });

    scrollToTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    /*End*/
});