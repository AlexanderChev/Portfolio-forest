'use strict';

import validate from './validate';
import ajaxForm from './ajax';
import dialogue from './dialogue';

export default function feedback() {

    var _submitForm = function (e) {
        e.preventDefault();

        var form = $(this).closest('#feedback'),
            url = '/mail';

        if (validate(form)) {
            var responce = ajaxForm(form, url);
            responce.done(function (res) {
                var message = $('<p />', { text: 'Сообщение отправлено'}),
                    btn = $('<button />', { text: 'OK', 'class': 'btn btn--bg-green' });

                dialogue( message.add(btn) );
            });
        }
    };

    $('#feedback-submit').on('click', _submitForm);

};
