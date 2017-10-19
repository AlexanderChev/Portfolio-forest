'use strict';

let mongoose = require('mongoose');

let Skills = new mongoose.Schema({
        category: {
			type: String
		},
		items: {
			type: [{
				name: {
					type: String
				},
				value: {
					type: Number,
					default: 0
				}
			}]
		}
    });

mongoose.model('skills', Skills);
