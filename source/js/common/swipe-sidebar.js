export default function swipeSidebar() {
    var
        body = $('body'),
        sidebar = $('.sidebar'),
        touchStartX = 0,
        touchEndX = 0,
        threshold = 100;

    body.on('touchstart', function (event) {
        if ($(window).width() >= 1200)
            return;

        var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];

        touchStartX = touch.pageX;
    });

    body.on('touchend', function (event) {
        if ($(window).width() >= 1200)
            return;

        var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];

        touchEndX = touch.pageX;

        if (touchEndX - touchStartX > threshold && !sidebar.hasClass('sidebar--active'))
            sidebar.addClass('sidebar--active');
        else if (touchEndX - touchStartX < -threshold && sidebar.hasClass('sidebar--active'))
            sidebar.removeClass('sidebar--active');
    });
};