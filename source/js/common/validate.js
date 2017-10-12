'use strict';

import dialogue from './dialogue';

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
            _qTip(element);
            valid = false;
        }

        if(element.attr('type') === 'email') {
            var pattern = /.+@.+\..+/i;
            if (val) {
                valid = pattern.test(val);
                if (!valid) {
                    element.addClass('field--error');
                    _qTip(element, 'Введите корректный email!');
                    valid = false;
                }
            }
        }
    });

    if (valid) {
        if(form.hasClass('authorization__form') &&
            (!$('#is-human').prop('checked') || !$('#norobot-yes').prop('checked'))) {
            var message = $('<p />', { text: 'Роботам тут не место!'}),
                btn = $('<button />', { text: 'OK', 'class': 'btn btn--bg-green' });

            dialogue( message.add(btn) );
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

    function _qTip(element, title) {
        var position;

        if ($(window).width() < 768) {
            position = {
                my: 'center center',
                at: 'bottom center'
            }
        } else {
            position = {
                my: 'center left',
                at: 'center right'
            }
        }

        function setText(event, api) {
            return $(this).data('errorContent');
        }

        $(element).qtip({
            content: {
                text: title ? title : setText
            },

            show: {
              event: 'show'
            },

            hide: {
              event: 'keydown hide'
            },

            position: position,

            style: {
                classes: 'qtip-red qtip-custom-red'
            }
        }).trigger('show');
    }

    form.on('keydown', '.field--error', _removeError);
    form.on('reset', _clearForm);

    return valid;
};