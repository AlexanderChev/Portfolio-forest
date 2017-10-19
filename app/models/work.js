'use strict';

let mongoose = require('mongoose'),
    Work = new mongoose.Schema({
		name: {
			type: String,
			required: [true, 'Укажите имя проекта']
		},
		tech: {
			type: String,
			required: [true, 'Укажите используемые технологии']
		},
		link: {
			type: String,
			required: [true, 'Укажите ссылку на проект']
		},
		picture: {
			type: [String]
		}
});

mongoose.model('work', Work);
