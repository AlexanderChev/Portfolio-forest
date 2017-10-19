'use strict';

import ajaxForm from '../ajax';
import validate from '../validate';
import modalInit from '../modal';

export default function addPost() {
	var _submitForm = function (e) {
		e.preventDefault();

		var form = $(this).closest('#form-post'),
			url = '/admin/post',
			data = form.serialize();

		if (validate(form)) {
			console.log(data);
			var responce = ajaxForm(data, url);
			responce.done(function (res) {
				modalInit();
			});
		}

	};

	$('#post-submit').on('click', _submitForm);
};
