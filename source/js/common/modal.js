'use strict';

import dialogue from './dialogue';

export default function modalInit(textMessage, textBtn) {
	textMessage = textMessage || 'Сообщение отправлено';
	textBtn = textBtn || 'OK';
	var message = $('<p />', { text: textMessage}),
		btn = $('<button />', { text: textBtn, 'class': 'btn btn--bg-green' });

	dialogue( message.add(btn) );
}
