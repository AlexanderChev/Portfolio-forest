'use strict';
import {localSvg} from './common/local-svg';
import {flip} from './common/flip';
import {ajaxForm} from './common/ajax';

localSvg(window, document);
flip().init();
// function loadScript(page) {
//     return $(page).length;
// }
// $.extend($.fancybox.defaults, {
//     helpers: {
//         overlay: {
//             locked: false
//         }
//     }
// });
