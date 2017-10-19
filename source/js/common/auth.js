'use strict';

import validate from './validate';
import ajaxForm from './ajax';
import modalInit from './modal';

export default function auth() {
	var login = $('#login'),
		password = $('#password');
    var _submitForm = function (e) {
        e.preventDefault();

		var form = $(this).closest('#authorization'),
			data = form.serialize(),
            url = '/auth';

        if (validate(form)) {
			console.log(data);
            var responce = ajaxForm(data, url);
            responce.done(function (res) {
                if (res.error) {
					modalInit(res.error, 'Закрыть')
                } else {
					localStorage.setItem('login', login.val());
                    window.location.href = '/admin';
                }
            });
        }
    };

	$('#auth-submit').on('click', _submitForm);
	$('document').ready(function () {
		var storage = localStorage.getItem('login');

		if (storage) {
			login.val(storage);
			password.focus();
		} else {
			login.focus();
		}
	});
};
