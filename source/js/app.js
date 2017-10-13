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
import feedback from './common/feedback';
import auth from './common/auth';
import map from './common/map';
import animateSvgProgress from './common/svg-circle';

(function () {
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

	if (loadScript('#feedback')) {
		feedback();
	}

	if (loadScript('.contacts')) {
		window.onload = window.onresize = function () {
			moveFooter('.footer');
		};
		google.maps.event.addDomListener(window, 'load', map);
		animateSvgProgress();
	}

	if (loadScript('.blog')) {
		sidebar();
		swipeSidebar();
	}

	if (loadScript('.authorization')) {
		flip();
		auth();
	}

	function loadScript(elem) {
		return $(elem).length;
	}
})();
