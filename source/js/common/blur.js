'use strict';
var blur = (function () {
    var bgBlur = $('.feedback__blur'),
        blurSection = $('.reviews');

    return {
        init: function () {
            var bgWidth = blurSection.width(),
                posLeft = blurSection.offset().left - bgBlur.offset().left,
                posTop = blurSection.offset().top - bgBlur.offset().top;

            if ($(window).width()>1800){
                $(bgBlur, blurSection).css('background-size', bgWidth + 'px');
            }

            bgBlur.css({
                'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
            });
        }
    }

})();

if (loadScript('#page-works')) {
    blur.init();

    $(window).resize(function () {
        blur.init();
    });
}
