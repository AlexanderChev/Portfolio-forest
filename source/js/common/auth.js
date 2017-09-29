'use strict';
var auth = (function () {
    var _authorization = function (evt) {
        evt.preventDefault();
        var form = $(this).closest('#authorization'),
            url = '/auth',
            data = form.serialize();

        if (validate.validateForm(form)) {
            _ajaxForm(data, url);
        }
    };

    var _ajaxForm = function (data, url){
            $.ajax({
            type: "POST",
            url: url,
            dataType: 'json',
            cache: false,
            data: data
        }).done(function(response){
            if(response.error) {
                $.fancybox('<h1>' + response.error + '</h1>');
            }else  {
                window.location.href = '/admin';
            }
        }).fail(function(){
            $.fancybox('<h1>Ошибка соединения с сервером</h1>');
        });
    };

    return {
        init: function () {
            $('.auth-window__submit').on('click', _authorization);
        }
    }
})();

auth.init();