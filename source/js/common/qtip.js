'use strict';

export default function qTip(element, title) {
	var position;

	if ($(window).width() < 768) {
		position = {
			my: 'center center',
			at: 'bottom center'
		}
	} else {
		position = {
			my: 'center left',
			at: 'center right'
		}
	}

	function setText(event, api) {
		return $(this).data('errorContent');
	}

	$(element).qtip({
		content: {
			text: title ? title : setText
		},

		show: {
		  event: 'show'
		},

		hide: {
		  event: 'keydown hide'
		},

		position: position,

		style: {
			classes: 'qtip-red qtip-custom-red'
		}
	}).trigger('show');
};
