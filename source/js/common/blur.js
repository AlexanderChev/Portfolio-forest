'use strict';
export default function blur() {
    var bgBlur = $('.reviews__feedback-blur').css({
            top: 0,
            left: 0
        }),
        blurSection = $('.reviews'),
		bgWidth = blurSection.width(),
		bgHeight = blurSection.height(),
        posLeft = blurSection.offset().left - bgBlur.offset().left,
		posTop = blurSection.offset().top - bgBlur.offset().top,
    	fHeight = $('.footer').height();

    bgBlur.css({
			top: posTop + fHeight,
            left: posLeft,
            width: bgWidth,
            height: bgHeight
        });

}


