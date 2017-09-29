'use strict';
var scrollTo = (function () {
    var _scrollDown = function (evt) {
        evt.preventDefault();
        var position = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(position).offset().top
        }, 700, 'swing');
    };

    var _scrollUp = function (evt) {
        evt.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700, 'swing');
    };

    return {
        init: function () {
            $('.arrow-link--down').on('click', _scrollDown);
            $('.arrow-link--up').on('click', _scrollUp)
        }
    }
})();

scrollTo.init();