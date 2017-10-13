'use strict';

import qTip from '../qTip';
import ajaxForm from '../ajax';

export default function setSkills() {
	var _submitForm = function (e) {
		e.preventDefault();

		var form = $(this).closest('#form-skills'),
			url = '/skills',
			data = {},
			valid = true;

		$('.admin__skills-input').each(function () {
			var $this = $(this),
				group = $this.data('group'),
				skill = $this.attr('name'),
				val = $this.val(),
				min = +$this.attr('min'),
				max = +$this.attr('max');

			if (!val) {
				qTip($this);
				valid = false;
			} else if (!isNumeric(val)) {
				qTip($this, 'Это не число');
				valid = false;
			} else if (min >= +val || max <= +val) {
				qTip($this, 'Введите число от 0 до 100');
				valid = false;
			} else {
				if (!(group in data)) {
					data[group] = {};
				}
				data[group][skill] = $this.val();
			}
		});

		if (valid) {
			data = JSON.stringify(data);
			console.log(data);
			var responce = ajaxForm(data, url);
			responce.done(function (res) {
				modalInit();
			});
		}

	}

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	$('#skills-submit').on('click', _submitForm);
};
