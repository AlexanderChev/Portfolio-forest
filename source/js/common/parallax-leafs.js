export default function parallaxLeafs() {
    var startMove = $('.reviews').offset().top,
        leaf1 = $('.reviews__leaf-1'),
        leaf2 = $('.reviews__leaf-2'),
        leaf3 = $('.reviews__leaf-3');

    var _move = function (block, windowScroll, amount) {
        var strafe = windowScroll / amount + '%',
            transformString = 'translate3d(0,' + strafe + ',0)';

        block.css('transform', transformString);
    };

    $(window).on('scroll', function () {
        var hScroll = $(window).scrollTop() + $(window).height() - startMove;
        _move(leaf1, -hScroll, 10);
        _move(leaf2, -hScroll, 5);
        _move(leaf3, -hScroll, 15);
    });
};