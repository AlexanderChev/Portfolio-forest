export default function menu() {
	var menu = $('.header__menu'),
		items = menu.find('.navigation__item');

		$('.toggle').on('click', function (e) {
			e.preventDefault();

			menu.add(this).toggleClass('open');

			if (menu.hasClass('open')) {
				items.each(function(item) {
					$(this).removeClass('bounceIn');
				});
			}

		});

		menu.on('transitionend', showItems);

		function showItems() {
			var counter = 0;

			function req() {
				$(items[counter]).addClass('bounceIn');
				counter++;

				if (counter < items.length) {
					setTimeout(req, 200)
				}
			}
			req();
		}
};
