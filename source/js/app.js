'use strict';
import {localSvg} from './common/local-svg';
import flip from './common/flip';
import menu from './common/menu';
import preloader from './common/preloader';
import scrollTo from './common/scroll-to';
import parallaxScroll from './common/parallax-scroll';
import blur from './common/blur';
import moveFooter from './common/move-footer';
import parallaxLeafs from './common/parallax-leafs';
import sidebar from './common/sidebar';
import swipeSidebar from './common/swipe-sidebar';

localSvg(window, document);
preloader();
scrollTo();

if (loadScript('.header')) {
	menu();
    parallaxScroll();
}

if (loadScript('.reviews')) {
    window.onload = window.onresize = function () {
        moveFooter('.footer', '.reviews', blur);
    };
    parallaxLeafs();
}

if (loadScript('.contacts')) {
    window.onload = window.onresize = function () {
        moveFooter('.footer');
    }
}

if (loadScript('.blog')) {
    sidebar();
    swipeSidebar();
}

if (loadScript('.authorization')) {
	flip();
}


function loadScript(elem) {
    return $(elem).length;
}

$.extend($.fancybox.defaults, {
    helpers: {
        overlay: {
            locked: false
        }
    }
});
