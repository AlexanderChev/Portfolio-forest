'use strict';
export default function scrollTo() {
    var _scrollDown = function (e) {
        e.preventDefault();
        var position = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(position).offset().top
        }, 700, 'swing');
    };

    var _scrollUp = function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700, 'swing');
	};

	$('.arrow-link--down').on('click', _scrollDown);
	$('.arrow-link--up').on('click', _scrollUp)
};
