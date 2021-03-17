
$(function () {
	$(window).scroll(function () {
		$('.what__next').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
});

$(function () {
	$(window).scroll(function () {
		$('.draw').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInUp");
			}
		});
	});
});


