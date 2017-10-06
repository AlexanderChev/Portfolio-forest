'use strict';
export default function flip() {
	$(window).on('click keydown', flipBlock);
    function flipBlock(e) {
        var authBtn = $('.welcome__btn'),
            flipWindow = $('.authorization'),
			target = e.target;

        if ($(target).hasClass('welcome__btn')) {
            e.preventDefault();
            flipWindow.addClass('authorization--flip');
            authBtn.animate({opacity: 0}, 400).css({'visibility': 'hidden'});
        } else {
            if (target.id === 'backflip' || !target.closest('.authorization__back') || e.keyCode === 27)  {
                flipWindow.removeClass('authorization--flip');
                authBtn.animate({opacity: 1}, 400).css({'visibility': 'visible'});
            }
        }
    }
};
