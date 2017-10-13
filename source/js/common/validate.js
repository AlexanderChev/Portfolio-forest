'use strict';

import modalInit from './modal';
import qTip from './qtip';

export default function validate(form) {
    form = form instanceof jQuery ? form : $(form);
    var items = form.find('input, textarea').not('input[type=file]', 'input[type=hidden]', 'input[type=submit]', 'input[type=reset]'),
        valid = true;

    items.each(function (i, item) {
        var element = $(item),
            val = element.val();

        if ((element.attr('type') != "checkbox") &&
            (element.attr('type') != "radio") && (!val)) {
            element.addClass('field--error');
            qTip(element);
            valid = false;
        }

        if(element.attr('type') === 'email') {
            var pattern = /.+@.+\..+/i;
            if (val) {
                valid = pattern.test(val);
                if (!valid) {
                    element.addClass('field--error');
                    qTip(element, 'Введите корректный email!');
                    valid = false;
                }
            }
        }
    });

    if (valid) {
        if(form.hasClass('authorization__form') && (!$('#is-human').prop('checked') || !$('#norobot-yes').prop('checked'))) {
            modalInit('Роботам тут не место!', 'OK');
            valid = false;
        }
    }

    var _removeError = function () {
        $(this).removeClass('field--error');
    };

    var _clearForm = function () {
        $(this).find('.field').trigger('hide');
        $(this).find('.field--error').removeClass('field--error');
    };

    form.on('keydown', '.field--error', _removeError);
    form.on('reset', _clearForm);

    return valid;
};
