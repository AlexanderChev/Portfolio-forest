export default function parallaxLeafs() {
    var startMove = $('.reviews').offset().top,
        leaf1 = $('.reviews__leaf-1'),
        leaf2 = $('.reviews__leaf-2'),
        leaf3 = $('.reviews__leaf-3');

    function move(block, windowScroll, amount) {
        var strafe = windowScroll / amount + '%',
            transformString = 'translate3d(0,' + strafe + ',0)';
        console.log(windowScroll);
        
        block.css('transform', transformString);
    }
    console.log($(window).scrollTop());
    console.log(startMove);
    console.log($(window).height());
    $(window).on('scroll', function () {
        var hScroll = $(window).scrollTop() + $(window).height() - startMove;
        move(leaf1, -hScroll, 10);
        move(leaf2, -hScroll, 5);
        move(leaf3, -hScroll, 15);
    });
};