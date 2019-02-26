jQuery(document).ready(function ($) {
	$('.mobile-switcher').on('click', function (ev) {
		if (!$('.nav-menu').hasClass('active')) {
			$('.nav-menu').addClass('active');
		} else {
			$('.nav-menu').addClass('unactive');

			setTimeout(function () {
				$('.nav-menu').removeClass('active');
				$('.nav-menu').removeClass('unactive');
			}, 500);
		}
	});

	$('.choice-menu-item').on('click', function (ev) {
		ev.preventDefault();
		if (!$(this).hasClass('selected-choice')) {
			$('.choice-menu-item').removeClass('selected-choice');
			$(this).addClass('selected-choice');
		}
	});

	$('.cars-list-item').on('click', function (ev) {
		ev.preventDefault();
		if (!$(this).hasClass('selected-car-item')) {
			$('.cars-list-item').removeClass('selected-car-item');
			$(this).addClass('selected-car-item');
		}
	});
});