export default function animateSvgProgress() {
    var circleLength = 282.74334,
        container = $('.skills'),
        startAnimation = container.find('.skills__group').offset().top,
        itemCircle = container.find('.circle-progress');
    console.log(itemCircle.length);
    itemCircle.fadeOut();
    $(window).on('scroll', function () {
        if ($(window).scrollTop() + $(window).height() >= startAnimation) {
            itemCircle.each(function (index) {
                var $this = $(this),
                    percent = +$this.data('percent'),
                    duration = +$this.data('duration'),
                    toPercent = circleLength - circleLength / 100 * percent;
                $this.fadeIn(duration);
                $this.find('.circle-progress__item--inner').animate({'stroke-dashoffset': toPercent}, duration + index * 20);
            });
        }
    });
};
