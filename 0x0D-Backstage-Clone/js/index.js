$(function () {
	'use strict';
	var vh = $(window).height();
	$('.main-item')
		.height(vh)
		.scrollie({
			scrolloffset: -50,
			scrollingInView: function (e) {
				var bgColor = e.data('bg');
				$('body').css('background', 'var(' + bgColor + ')');
				$('a').css('color', 'var(--except-color)');
				$('button').css('color', 'var(--except-color)');
				if (bgColor == '--white') {
					$('a').css('color', 'var(--except-color)');
					$('button').css('color', 'var(--except-color)');
				} else {
					$('a').css('color', 'var(--white)');
					$('button').css('color', 'var(--white)');
				}
			}
		});
});
