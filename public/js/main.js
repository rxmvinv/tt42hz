/*
$(window).scroll(function () {
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

	var topCoord = 700;

	if ($(window).width() <= 938) {
		topCoord = 300;
	} else if ($(window).width() >= 938 && $(window).width() <= 1200) {
		topCoord = 500;
	}
	//var mainHeight = $('.main-banner').height();
	//if ($(document).scrollTop() > mainHeight) {
	if ($(document).scrollTop() > topCoord) {
		$('.nav-default').animate({visibility: "hidden"}, 300);
		$('.nav-menu').fadeIn(350);
	} else {
		$('.nav-menu').fadeOut(300);
		$('.nav-default').animate({visibility: "visible"}, 350);
	}
});
*/
/*
jQuery(document).ready(function ($) {
	$('.popup-clothing').css({height: $('.popup-clothing').width() / 2.41})
	$('.popup-branding').css({height: $('.popup-branding').width() / 2.41})
	$('.popup-marketplace').css({height: $('.popup-marketplace').width() / 2.41})
	$('.popup-web').css({height: $('.popup-web').width() / 2.41})
	$('.popup-before_after').css({height: $('.popup-before_after').width() / 2.41})
	$('.popup-marketplace_design').css({height: $('.popup-marketplace_design').width() / 2.41})

	$(window).resize(function() {
		$('.popup-clothing').css({height: $('.popup-clothing').width() / 2.41})
		$('.popup-branding').css({height: $('.popup-branding').width() / 2.41})
		$('.popup-marketplace').css({height: $('.popup-marketplace').width() / 2.41})
		$('.popup-web').css({height: $('.popup-web').width() / 2.41})
		$('.popup-before_after').css({height: $('.popup-before_after').width() / 2.41})
		$('.popup-marketplace_design').css({height: $('.popup-marketplace_design').width() / 2.41})
	});
});
*/
/*
// Lifestyle photography slider
		jQuery(document).ready(function ($) {
		  
		  	var initialSlide = 0;
		  	var selectedSlide;
		  	var breadCrumbs = $('.photography-video .lifestyle-article .slider .breadcrumbs-list li');
			var slideCount = $('.photography-video .lifestyle-article .slider .slide-box li').length;
			var slideWidth = $('.photography-video .lifestyle-article .slider .slide-box li').width();
			var slideHeight = $('.photography-video .lifestyle-article .slider .slide-box li').height();
			var sliderUlWidth = slideCount * slideWidth;

			$(window).resize(function() {
				slideCount = $('.photography-video .lifestyle-article .slider .slide-box li').length;
				slideWidth = $('.photography-video .lifestyle-article .slider .slide-box li').width();
				slideHeight = $('.photography-video .lifestyle-article .slider .slide-box li').height();
				sliderUlWidth = slideCount * slideWidth;
				$('.photography-video .lifestyle-article .slider').css({ width: slideWidth, height: slideHeight });
				$('.photography-video .lifestyle-article .slider .slide-box').css({ width: sliderUlWidth });
				console.log(sliderUlWidth);
			});

			window.addEventListener("orientationchange", function() {
				slideCount = $('.photography-video .lifestyle-article .slider .slide-box li').length;
				slideWidth = $('.photography-video .lifestyle-article .slider .slide-box li').width();
				slideHeight = $('.photography-video .lifestyle-article .slider .slide-box li').height();
				sliderUlWidth = slideCount * slideWidth;
				$('.photography-video .lifestyle-article .slider').css({ width: slideWidth, height: slideHeight });
				$('.photography-video .lifestyle-article .slider .slide-box').css({ width: sliderUlWidth });
			}, false);
			
			$('.photography-video .lifestyle-article .slider .breadcrumbs-list li').click(function () {
				selectedSlide = $(this).index();
				if (initialSlide < selectedSlide) {
					moveRight(selectedSlide)
				} else {
					moveLeft(selectedSlide)
				}
				initialSlide = selectedSlide;
			});

			$('.photography-video .lifestyle-article .slider').css({ width: slideWidth, height: slideHeight });
			
			$('.photography-video .lifestyle-article .slider .slide-box').css({ width: sliderUlWidth });
			
		    $(breadCrumbs[initialSlide]).addClass('current-slide');

		    function moveLeft(arg) {
		    	var slideWidthCalc = slideWidth * arg;
		        $('.photography-video .lifestyle-article .slider .slide-box').animate({
		            left: - slideWidthCalc
		        }, 200);

		        $(breadCrumbs[arg]).addClass('current-slide');
				for (var i = 0, l = breadCrumbs.length; i<l; i++) {
					if (i == arg) {continue; }
					$(breadCrumbs[i]).removeClass('current-slide');
				}
		    };

		    function moveRight(arg) {
		    	var slideWidthCalc = slideWidth * arg;
		        $('.photography-video .lifestyle-article .slider .slide-box').animate({
		            left: - slideWidthCalc
		        }, 200);

		        console.log($(breadCrumbs[arg]));

				$(breadCrumbs[arg]).addClass('current-slide');
				for (var i = 0, l = breadCrumbs.length; i<l; i++) {
					if (i == arg) {continue; }
					$(breadCrumbs[i]).removeClass('current-slide');
				}
		    };
		});    
*/
/*
		// Screen printing slider
		jQuery(document).ready(function ($) {
		  
		  	var initialSlide = 0;
		  	var selectedSlide;
		  	var breadCrumbs = $('.custom-printing .screen-printing .slider .breadcrumbs-list li');
			var slideCount = $('.custom-printing .screen-printing .slider .slide-box li').length;
			var slideWidth = $('.custom-printing .screen-printing .slider .slide-box li').width();
			var slideHeight = $('.custom-printing .screen-printing .slider .slide-box li').height();
			var sliderUlWidth = slideCount * slideWidth;

			$(window).resize(function() {
				slideCount = $('.custom-printing .screen-printing .slider .slide-box li').length;
				slideWidth = $('.custom-printing .screen-printing .slider .slide-box li').width();
				slideHeight = $('.custom-printing .screen-printing .slider .slide-box li').height();
				sliderUlWidth = slideCount * slideWidth;
				$('.custom-printing .screen-printing .slider').css({ width: slideWidth, height: slideHeight });
				$('.custom-printing .screen-printing .slider .slide-box').css({ width: sliderUlWidth });
			});

			window.addEventListener("orientationchange", function() {
				slideCount = $('.custom-printing .screen-printing .slider .slide-box li').length;
				slideWidth = $('.custom-printing .screen-printing .slider .slide-box li').width();
				slideHeight = $('.custom-printing .screen-printing .slider .slide-box li').height();
				sliderUlWidth = slideCount * slideWidth;
				$('.custom-printing .screen-printing .slider').css({ width: slideWidth, height: slideHeight });
				$('.custom-printing .screen-printing .slider .slide-box').css({ width: sliderUlWidth });
			}, false);
			
			$('.custom-printing .screen-printing .slider .breadcrumbs-list li').click(function () {
				selectedSlide = $(this).index();
				if (initialSlide < selectedSlide) {
					moveRight(selectedSlide)
				} else {
					moveLeft(selectedSlide)
				}
				initialSlide = selectedSlide;
			});

			$('.custom-printing .screen-printing .slider').css({ width: slideWidth, height: slideHeight });
			
			$('.custom-printing .screen-printing .slider .slide-box').css({ width: sliderUlWidth });
			
		    $(breadCrumbs[initialSlide]).addClass('current-slide');

		    function moveLeft(arg) {
		    	var slideWidthCalc = slideWidth * arg;
		        $('.custom-printing .screen-printing .slider .slide-box').animate({
		            left: - slideWidthCalc
		        }, 200);

		        $(breadCrumbs[arg]).addClass('current-slide');
				for (var i = 0, l = breadCrumbs.length; i<l; i++) {
					if (i == arg) {continue; }
					$(breadCrumbs[i]).removeClass('current-slide');
				}
		    };

		    function moveRight(arg) {
		    	var slideWidthCalc = slideWidth * arg;
		        $('.custom-printing .screen-printing .slider .slide-box').animate({
		            left: - slideWidthCalc
		        }, 200);

				$(breadCrumbs[arg]).addClass('current-slide');
				for (var i = 0, l = breadCrumbs.length; i<l; i++) {
					if (i == arg) {continue; }
					$(breadCrumbs[i]).removeClass('current-slide');
				}
		    };
		});    
			*/
			/*
			//Navigation animation
			jQuery(document).ready(function ($) {
				var mainpage = $('html, body');

				$("nav .navigate-design").on('click', function (ev) {
					ev.preventDefault();
					if ($(window).width() <= 938) {
						$(mainpage).animate({scrollTop: 310 }, 400);
					} else {
						$(mainpage).animate({scrollTop: $('.design-development').position().top - 100}, 400);
					}
				});

				$("nav .navigate-visuals").on('click', function (ev) {
					ev.preventDefault();

					if ($(window).width() <= 938) {
						$(mainpage).animate({scrollTop: 3500 }, 600);
					} else {
						$(mainpage).animate({scrollTop: $('.photography-video').position().top - 100}, 600);
					}
				});

				$("nav .navigate-ecommerce").on('click', function (ev) {
					ev.preventDefault();

					if ($(window).width() <= 938) {
						$(mainpage).animate({scrollTop: 6750 }, 700);
					} else {
						$(mainpage).animate({scrollTop: $('.e-commerce-marketplace').position().top - 100}, 700);
					}
				});

				$("nav .navigate-printing").on('click', function (ev) {
					ev.preventDefault();
					if ($(window).width() <= 938) {
						$(mainpage).animate({scrollTop: 8750}, 800);
					} else {
						$(mainpage).animate({scrollTop: $('.custom-printing').position().top - 100}, 800);
					}
				});

				$("nav .navigate-about").on('click', function (ev) {
					ev.preventDefault();
					if ($(window).width() <= 938) {
						$(mainpage).animate({scrollTop: 10600}, 900);
					} else {
						$(mainpage).animate({scrollTop: $('.about h1').position().top - 100}, 900);
					}
				});

				$("nav .navigate-contact").on('click', function (ev) {
					ev.preventDefault();
					if ($(window).width() <= 938) {
						$(mainpage).animate({scrollTop: 11400}, 1000);
					} else {
						$(mainpage).animate({scrollTop: $('.contact-footer').position().top - 100}, 1000);
					}
				});
			});
*/
/*
		jQuery(document).ready(function ($) {

			$(".design-development ul li.clothing-item img").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-clothing').fadeIn(350);
			});

			$(".popup-clothing .popup-close").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-clothing').fadeOut(350);
			});

			$(".design-development ul li.branding-item img").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-branding').fadeIn(350);
			});

			$(".popup-branding .popup-close").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-branding').fadeOut(350);
			});

			$(".design-development ul li.marketplace-item img").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-marketplace').fadeIn(350);
			});

			$(".popup-marketplace .popup-close").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-marketplace').fadeOut(350);
			});

			$(".design-development ul li.web-item img").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-web').fadeIn(350);
			});

			$(".popup-web .popup-close").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-web').fadeOut(350);
			});

			$(".design-development article.marketplace-branding img").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-before_after').fadeIn(350);
			});

			$(".popup-before_after .popup-close").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-before_after').fadeOut(350);
			});

			$(".e-commerce-marketplace .marketplace-design img").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-marketplace_design').fadeIn(350);
			});

			$(".popup-marketplace_design .popup-close").on('click', function (ev) {
				ev.preventDefault();
				$('.popup-marketplace_design').fadeOut(350);
			});
		});
*/
/*
jQuery(document).ready(function ($) {
	$('.nav-menu h2').on('click', function () {
		if (!$(".nav-menu .menu-column-container").hasClass("expanded-menu-container")) {
			$(".nav-menu .menu-column-container").addClass("expanded-menu-container");
		} else {
			$(".nav-menu .menu-column-container").addClass("released-menu-container");
			$(".nav-menu .menu-column-container").removeClass("expanded-menu-container");
			setTimeout(function () {
				$(".nav-menu .menu-column-container").removeClass("released-menu-container");
			}, 400);
		}
	})
});
*/
/*
jQuery(document).ready(function ($) {
	$('.photography-video .hd-aerial div.video-section .video-play').on('click', function () {
		$('.photography-video .hd-aerial div.video-section video').addClass('video-playing');
		$('.photography-video .hd-aerial div.video-section video').get(0).play();
		$('.photography-video .hd-aerial div.video-section .video-play').animate({'opacity': '0'}, 300);
		setTimeout(function () {
			$('.photography-video .hd-aerial div.video-section .video-play').css({'visibility': 'hidden'});
			$('.photography-video .hd-aerial div.video-section video').attr('controls',true);
		}, 400)
	});

	$('.photography-video .hd-aerial div.video-section video').on('ended',function(){
		$('.photography-video .hd-aerial div.video-section video').attr('controls',false);
		$('.photography-video .hd-aerial div.video-section .video-play').css({'visibility': 'visible'});
		$('.photography-video .hd-aerial div.video-section .video-play').animate({'opacity': '1'}, 300);
	});

	$('.photography-video .hd-aerial div.video-section video').on('pause',function(){
		$('.photography-video .hd-aerial div.video-section video').attr('controls',false);
		$('.photography-video .hd-aerial div.video-section .video-play').css({'visibility': 'visible'});
		$('.photography-video .hd-aerial div.video-section .video-play').animate({'opacity': '1'}, 300);
	});
});
*/