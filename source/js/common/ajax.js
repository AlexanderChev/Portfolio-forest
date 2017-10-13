'use strict';

import modalInit from './modal';

export default function ajaxForm(data, url){
    var result = $.ajax({
            type: "POST",
            url: url,
            dataType: 'json',
            data: data
        }).fail(function (res) {
            console.log(res.status + '   ' +  res.statusText);
			modalInit('Ошибка соединения с сервером!', 'Закрыть');
        });

    return result;
}
