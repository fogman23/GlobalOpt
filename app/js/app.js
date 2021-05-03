document.addEventListener("DOMContentLoaded", function() {
	const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list_active');
        })
    })


	$('.reviews__block').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
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
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
		  	},
		{
			breakpoint: 575,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	function showBtn (leftBtn, rightBtn) {
		$(leftBtn).on('click', function() {
			$(leftBtn).hide();
			$(rightBtn).hide(50);
	
			setTimeout(function() {
				$(leftBtn).show();
				$(rightBtn).show();
			}, 500);
		});
		$(rightBtn).on('click', function() {
			$(leftBtn).hide();
			$(rightBtn).hide(50);
	
			setTimeout(function() {
				$(leftBtn).show();
				$(rightBtn).show();
			}, 500);
		});
	}

	showBtn('.slick-prev', '.slick-next');
});
