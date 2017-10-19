'use strict';
export default function sidebar() {
    var sidebar = $('.sidebar'),
        sidebarLink = sidebar.find('.sidebar__link');

    var _scrollArticle = function (e) {
        e.preventDefault();
        var position = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(position).offset().top
        }, 700, 'swing');
    };

    var _moveSidebar = function (e) {
        var hSidebarTop = $('.blog__sidebar').offset().top,
            hScroll = $(window).scrollTop(),
            hSidebarBottom = hSidebarTop + $('.blog__sidebar').height();

        $('.article').each(function (index, article) {
			var articleTop = $(article).offset().top - 200,
				articleBottom = $(article).height() + articleTop,
                currentId = $(article).attr('id');

            if (articleTop < hScroll && articleBottom > hScroll) {
                sidebarLink
                    .removeClass('sidebar__link--active')
                    .filter('[href="#' + currentId + '"]')
                    .addClass('sidebar__link--active');
            }

            if (hScroll >= hSidebarBottom && $(window).width() > 768) {
                sidebar.css({'position': 'absolute', 'top': hSidebarBottom + 'px'});
            } else if (hScroll >= hSidebarTop && $(window).width() > 768) {
                sidebar.css({'position': 'fixed', 'top': 50 + 'px'}).addClass('sidebar--fixed');
            } else {
                sidebar.css({'position': 'relative'}).removeClass('sidebar--fixed');
                if ($(window).width() <= 768) {
                    sidebar.css({'position': 'fixed', 'top': 0});
                }
            }
        });
    };

    sidebarLink.on('click', _scrollArticle);
    $(window).on('scroll', _moveSidebar);
};



