'use strict';
export var flip = function () {
    var flipBlock = function (evt) {
        var authBtn = $('.welcome__btn'),
            flipWindow = $('.authorization');
        var target = evt.target;

        if (target.classList.contains('welcome__btn')) {
            evt.preventDefault();
            flipWindow.addClass('authorization--flip');
            authBtn.animate({opacity: 0}, 400).css({'visibility': 'hidden'});
        } else {
            if (target.id === 'backflip' || !target.closest('.authorization__back') || evt.keyCode === 27)  {
                flipWindow.removeClass('authorization--flip');
                authBtn.animate({opacity: 1}, 400).css({'visibility': 'visible'});
            }
        }
    };
    return {
        init: function () {
            $(window).on('click keydown', flipBlock);
        }
    }
};
