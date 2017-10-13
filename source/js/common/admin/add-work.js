'use strict';

import validate from '../validate';
import modalInit from '../modal';

export default function addWork() {
    var _submitForm = function (e) {
		e.preventDefault();

        var form = $(this).closest('#form-works'),
            url = '/works',
            data = new FormData(form[0]);

        if (validate(form)) {
            console.log(data);
            $.ajax({
				type: "POST",
				url: url,
				data: data,
				processData: false,
				contentType: false
			}).done(function(response){
				modalInit(responce.message);
			}).fail(function(){
				modalInit('Ошибка соединения с сервером', 'Закрыть');
			});
        }
	};

	$('#works-submit').on('click', _submitForm);
}
