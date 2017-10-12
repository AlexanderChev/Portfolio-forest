import dialogue from './dialogue';

export default function ajaxForm(form, url){
    var data = form.serialize();
    var result = $.ajax({
            type: "POST",
            url: url,
            dataType: 'json',
            data: data
        }).fail(function (res) {
            console.log(res.status + '   ' +  res.statusText);
            var message = $('<p />', { text: 'Ошибка соединения с сервером!'}),
                btn = $('<button />', { text: 'Закрыть', 'class': 'btn btn--bg-green' });

            dialogue( message.add(btn) );
        });

    return result;
}
