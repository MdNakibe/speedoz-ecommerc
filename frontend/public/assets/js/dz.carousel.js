/**
	Template Name 	 : Akcel
	Author			 : DexignZone
	Version			 : 1.0
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio
	
**/

/* JavaScript Document */
jQuery(window).on('load', function() {
    'use strict';
	
	function changeItemBoxed() {
		if(jQuery("body").hasClass("boxed")) {
			return 3;
		} else {
			return 4;
		}
	}
	
	// Main Slider
	if(jQuery('.main-slider').length > 0){
		var swiperMain = new Swiper('.main-slider', {
			speed: 1500,
			effect: "fade",
			slidesPerView: 1,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
				el: '.main-pagination',
				clickable: true,
			},
			navigation: {
	          	nextEl: ".main-btn-next",
				prevEl: ".main-btn-prev",
	        },
		});
	}
	
	// Team Slider
	if(jQuery('.team-slider').length > 0){
		var swiper = new Swiper('.team-slider', {
			speed: 1500,
			slidesPerView: 4,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: false,
				
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				500: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Testimonial Swiper
	if(jQuery('.testimonial-swiper').length > 0){
		var swiper = new Swiper('.testimonial-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView:"auto",
			spaceBetween: 0,
			centeredSlides: true,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.test-swiper-next',
				prevEl: '.test-swiper-prev',
			},
		});
	}
	
	// Testimonial Swiper 2
	if(jQuery('.testimonial-swiper2').length > 0){
		var swiper = new Swiper('.testimonial-swiper2', {
			speed: 1500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.test-swiper-next',
				prevEl: '.test-swiper-prev',
			},
		});
	}
	
	// Testimonial Swiper 3
	if(jQuery('.testimonial-swiper3').length > 0){
		var swiper = new Swiper('.testimonial-swiper3', {
			speed: 1500,
			parallax: true,
			slidesPerView: 2,
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.test-swiper-next',
				prevEl: '.test-swiper-prev',
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
		});
	}
	
	// Blog Slider
	if(jQuery('.blog-slider').length > 0){
		var swiper = new Swiper('.blog-slider', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 0,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Blog Slider Full
	if(jQuery('.blog-slider-full').length > 0){
		var swiper = new Swiper('.blog-slider-full', {
			speed: 1500,
			parallax: true,
			slidesPerView: changeItemBoxed(),
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Recent Blog
	if(jQuery('.recent-blog').length > 0){
		var swiper = new Swiper('.recent-blog',{
			speed: 1500,
			parallax: true,
			slidesPerView: changeItemBoxed(),
			spaceBetween: 30,
			slidesPerView: 3,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Recent Blog
	if(jQuery('.recent-blog2').length > 0){
		var swiper = new Swiper('.recent-blog2',{
			speed: 1500,
			parallax: true,
			slidesPerView: changeItemBoxed(),
			spaceBetween: 30,
			slidesPerView: 5,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1600: {
					slidesPerView: 5,
				},
				1281: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Recent Blog
	if(jQuery('.recent-blog1').length > 0){
		var swiper = new Swiper('.recent-blog1',{
			speed: 1500,
			parallax: true,
			slidesPerView: changeItemBoxed(),
			spaceBetween: 30,
			slidesPerView: 3,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
	// Clients Swiper
	if(jQuery('.categories-swiper').length > 0){
		var swiper5 = new Swiper('.categories-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 6,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},	
			breakpoints: {
				1191: {
					slidesPerView: 6,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
				}
		});
	}
	
	// Clients Swiper
	if(jQuery('.clients-swiper').length > 0){
		var swiper5 = new Swiper('.clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				1191: {
					slidesPerView: 5,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	// Clients Swiper
	if(jQuery('.banner-clients-swiper').length > 0){
		var swiper5 = new Swiper('.banner-clients-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 3,
			spaceBetween: 70,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next5',
				prevEl: '.swiper-button-prev5',
			},
			breakpoints: {
				575: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 2,
				},
			}
		});
	}
	
	if(jQuery('.fundraiser-gallery-swiper').length > 0){
		var swiper = new Swiper(".fundraiser-gallery-thumb", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 4,
		});
		var swiper2 = new Swiper(".fundraiser-gallery-swiper", {
			loop: false,
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
	
	// Recent Blog
	 if(jQuery('.latest-causes').length > 0){
		var swiper = new Swiper('.latest-causes',{
			speed: 1500,
			parallax: true,
			slidesPerView: changeItemBoxed(),
			spaceBetween: 30,
			slidesPerView: 4,
			loop:true,
			autoplay: {
			   delay: 3000,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				1680: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	} 
	
});
/* Document .ready END */