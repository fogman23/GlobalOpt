document.addEventListener("DOMContentLoaded", function() {

	$('.reviews__block').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '33%',
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/dest/Sec8arrow-left.png" alt="arrows"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/dest/Sec8arrow-right.png" alt="arrows"></button>',
		responsive: [
		{
			breakpoint: 992,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '33%',
					slidesToShow: 1
				}
			},
		{
			breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '33%',
					slidesToShow: 1
				}
		  	},
		{
			breakpoint: 575,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
});
