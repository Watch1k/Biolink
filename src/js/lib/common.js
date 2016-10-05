/* Common JS */
$(document).ready(function () {

	new WOW().init();

	// Clear placeholder
	(function () {
		var el = $('input, textarea');
		el.focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');
		});
		el.blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	}());

	(function () {
		var videoBtn = $('.js-about-video'),
			videoPopup = $('.js-about-popup'),
			closeBtn = $('.js-about-close');

		videoPopup.on('click', function (e) {
			if (!$(e.target).hasClass('about__popup-video')) {
				$(this).find('video').get(0).pause();
				$(this).fadeOut();
			}
		});

		videoBtn.on('click', function () {
			$(this).siblings(videoPopup).fadeIn().find('video').get(0).play();
		});

		closeBtn.on('click', function () {
			$(this).siblings('video').get(0).pause();
			$(this).closest(videoPopup).fadeOut();
		});
	})();

	(function () {
		var hamburger = $('.js-hamburger'),
			nav = $('.js-nav'),
			body = $('body');

		hamburger.on('click', function () {
			$(this).toggleClass('is-active');
			nav.toggleClass('is-active');
			body.toggleClass('is-active');
		});

		$(window).on('resize', function () {
			if (nav.hasClass('is-active')) {
				nav.removeClass('is-active');
			}
			if (hamburger.hasClass('is-active')) {
				hamburger.removeClass('is-active');
			}
			if (body.hasClass('is-active')) {
				body.removeClass('is-active');
			}
		});
	})();

	(function () {
		var popup = $('.js-popup'),
			closeBtn = $('.js-popup-close'),
			initBtn = $('.js-init-map');

		initBtn.on('click', function () {
			$(this).siblings(popup).fadeIn();
			google.maps.event.trigger(map2, 'resize');
			google.maps.event.trigger(map3, 'resize');
		});

		closeBtn.on('click', function () {
			$(this).closest(popup).fadeOut();
		});
	})();

	(function () {
		var number1 = $('.js-number[data-number="1"]'),
			number2 = $('.js-number[data-number="2"]'),
			number3 = $('.js-number[data-number="3"]'),
			number4 = $('.js-number[data-number="4"]'),
			number5 = $('.js-number[data-number="5"]'),
			number6 = $('.js-number[data-number="6"]'),
			ind1 = false,
			ind2 = false,
			ind3 = false,
			ind4 = false,
			ind5 = false,
			ind6 = false,
			subcol1 = $('.js-subcol-1'),
			subcol2 = $('.js-subcol-2');

		$(subcol1).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				$(this).addClass('is-active');
			}
		});

		$(subcol2).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				$(this).addClass('is-active');
			}
		});

		$(number1).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				if (!ind1) {
					ind1 = true;
					$(this).animateNumber({
						number: 90
					}, 2000);
				}
			}
		});

		$(number2).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				if (!ind2) {
					ind2 = true;
					$(this).animateNumber({
						number: 1000
					}, 2000);
				}
			}
		});

		$(number3).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				if (!ind3) {
					ind3 = true;
					$(this).animateNumber({
						number: 80
					}, 2000);
				}
			}
		});

		$(number4).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				if (!ind4) {
					ind4 = true;
					$(this).animateNumber({
						number: 90
					}, 2000);
				}
			}
		});

		$(number5).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				if (!ind5) {
					ind5 = true;
					$(this).animateNumber({
						number: 50
					}, 2000);
				}
			}
		});

		$(number6).bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				if (!ind6) {
					ind6 = true;
					$(this).animateNumber({
						number: 70
					}, 2000);
				}
			}
		});
	})();

});