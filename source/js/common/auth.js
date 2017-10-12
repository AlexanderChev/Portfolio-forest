'use strict';

import validate from './validate';
import ajaxForm from './ajax';
import dialogue from './dialogue';

export default function auth() {
    var _submitForm = function (e) {
        e.preventDefault();

        var form = $(this).closest('#authorization'),
            url = '/auth';

        if (validate(form)) {
            var responce = ajaxForm(form, url);
            responce.done(function (res) {
                if (res.error) {
                    var message = $('<p />', { text: res.error}),
                        btn = $('<button />', { text: 'Закрыть', 'class': 'btn btn--bg-green' });

                    dialogue( message.add(btn) );
                } else {
                    window.location.href = '/admin';
                }
            });
        }
    };

    $('#auth-submit').on('click', _submitForm);
};
