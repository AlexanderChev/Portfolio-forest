'use strict';
export default function parallaxScroll() {
    var background = $('.header__bg'),
		developer = $('.user');

	function move(block, windowScroll, amount) {
        var strafe = windowScroll / amount + '%',
            transformString = 'translate3d(0,' + strafe + ',0)';
        block.css('transform', transformString);
    }

	$(window).on('scroll', function () {
		var hScroll = $(this).scrollTop();

		move(background,hScroll, 20);
		move(developer, hScroll, 30);
	});
};

