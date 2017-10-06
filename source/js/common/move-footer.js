'use strict';

export default function moveFooter(element, target, callback) {
    element = element instanceof jQuery ? element : $(element);

    var elementHeight = Math.ceil(element.height());
    console.log(elementHeight);
    element.css('margin-top', '-' + elementHeight + 'px');

    if (target) {
        target = target instanceof jQuery ? target : $(target);
        target.css('padding-bottom', elementHeight + 'px');
    }

    if (callback)
        callback(elementHeight);
};