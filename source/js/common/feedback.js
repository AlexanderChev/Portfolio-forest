'use strict';

import validate from './validate';
import ajaxForm from './ajax';
import modalInit from './modal';

export default function feedback() {

    var _submitForm = function (e) {
        e.preventDefault();

		var form = $(this).closest('#feedback'),
			data = form.serialize(),
            url = '/mail';

        if (validate(form)) {
            var responce = ajaxForm(data, url);
            responce.done(function (res) {
                modalInit();
            });
        }
    };

    $('#feedback-submit').on('click', _submitForm);

};
