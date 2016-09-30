/* Common JS */
$(document).ready(function(){

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	(function () {
		var hamburger = $('.js-hamburger'),
			nav = $('.js-nav');

		hamburger.on('click', function () {
			$(this).toggleClass('is-active');
			nav.toggleClass('is-active');
		});
	})();

});