/**
	Template Name 	 : Akcel
	Author			 : DexignZone
	Version			 : 1.0
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio
	
	Core script to handle the entire theme and core functions
**/

var Akcel = function(){
	
	/* Search Bar ============ */
	siteUrl = '';
	
	var screenWidth = $( window ).width();
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		var headerTop = 0;
		var headerNav = 0;
		
		setTimeout(function(){
			$('.header .sticky-header').removeClass('is-fixed');
			$('.header').removeAttr('style');
			
			if(jQuery('.header').length > 0 ){
				if(jQuery('.header .top-bar').length > 0 && screenWidth > 991){
					headerTop = $('.header .top-bar').outerHeight();
					headerNav = $('.header .main-bar').outerHeight();
				}else{
					headerNav = $('.header').height();
				}
			}
			
			var headerHeight = Math.round(headerNav + headerTop);
			jQuery('.header').css('height', headerHeight);
		}, 500);
	}
	
	/* Resize Element On Resize ============ */
	var handleResizeElementOnResize = function(){
		var headerTop = 0;
		var headerNav = 0;
		
		$('.header .sticky-header').removeClass('is-fixed');
		$('.header').removeAttr('style');
		
		
		setTimeout(function(){
			
			if(jQuery('.header .top-bar').length > 0 &&  screenWidth > 991)
			{
				headerTop = parseInt($('.header .top-bar').outerHeight());
			}

			if(jQuery('.header').length > 0 )
			{
				headerNav = parseInt($('.header').height());
				headerNav =	(headerNav == 0)?parseInt($('.header .main-bar').outerHeight()):headerNav;
			}	
			
			var headerHeight = headerNav + headerTop;
			
			jQuery('.header').css('height', headerHeight);
		
		}, 500);
    }
	
	/* One Page Layout ============ */
	var onePageLayout = function() {
		'use strict';
		var headerHeight =   parseInt($('.onepage').css('height'), 10);
		
		$(".scroll").unbind().on('click',function(event) 
		{
			event.preventDefault();
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = $(hash).offset().top;
				var headerHeight =   parseInt($('.onepage').css('height'), 10);
				
				
				//$('body').scrollspy({target: ".navbar", offset: headerHeight+2}); 
				
				var scrollTopPosition = seactionPosition - (headerHeight);
				
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		$('body').scrollspy({target: ".navbar", offset: headerHeight + 20});  
	}
	// Team 

	
	
	/* Handle Page On Scroll ============ */
	var handlePageOnScroll = function(event){
		
		'use strict';
		var headerHeight = parseInt($('.header').css('height'), 10);
		
		$('.navbar-scroll .scroll').on('click', function(event) 
		{
			event.preventDefault();

			jQuery('.navbar-scroll .scroll').parent().removeClass('active');
			jQuery(this).parent().addClass('active');
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = parseInt($(hash).offset().top, 10);
				var headerHeight =   parseInt($('.header').css('height'), 10) - 30;
				
				var scrollTopPosition = seactionPosition - headerHeight;
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 1500, function(){
					
				});
			}   
		});
		
		pageOnScroll();
	} 
	
	/* Page On Scroll ============ */
	var pageOnScroll = function(event){
		
		if(jQuery('.navbar-scroll').length > 0){
			
			$('.header .sticky-header').addClass('is-fixed');
			var headerHeight = parseInt(jQuery('header .main-bar').height(), 10);
			
			setTimeout(function(){
				$('.header .sticky-header').removeClass('is-fixed');
			}, 100);
			
			jQuery(document).on("scroll", function(){
				
				var scrollPos = jQuery(this).scrollTop();
				jQuery('.navbar-scroll .scroll').each(function () {
					var elementLink = jQuery(this);
					
					var refElement = jQuery(elementLink.attr("href"));
					var seactionPosition = parseInt(jQuery(this.hash).offset().top, 10);
					var scrollTopPosition = (seactionPosition - headerHeight) - 30;
					
					if (scrollTopPosition <= scrollPos){
						elementLink.parent().addClass("active");
						elementLink.parent().siblings().removeClass("active");
					}
				});
				
			});
		}
	} 
	
	/* Load File ============ */
	var dzTheme = function(){
		'use strict';
		var loadingImage = '<img src="images/loading.gif">';
		jQuery('.dzload').each(function(){
		var dzsrc =   siteUrl + $(this).attr('dzsrc');
		  	jQuery(this).hide(function(){
				jQuery(this).load(dzsrc, function(){
					jQuery(this).fadeIn('slow');
				}); 
			})
			
		});
		
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
		
		jQuery('.menu-btn').on('click',function(){
			jQuery('.contact-sidebar').addClass('active');
		});
		jQuery('.menu-close').on('click',function(){
			jQuery('.contact-sidebar').removeClass('active');
			jQuery('.menu-btn').removeClass('open');
		});
	}
	
	/* Magnific Popup ============ */
	var MagnificPopup = function(){
		'use strict';	
		
		if(jQuery('.mfp-gallery').length > 0)
		{
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
			/* magnificPopup function end */
		}
		
		if(jQuery('.mfp-video').length > 0)
		{
			/* magnificPopup for Play video function */		
			jQuery('.mfp-video').magnificPopup({
				type: 'iframe',
				iframe: {
					markup: '<div class="mfp-iframe-scaler">'+
							'<div class="mfp-close"></div>'+
							'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
							'<div class="mfp-title">Some caption</div>'+
							'</div>'
				},
				callbacks: {
					markupParse: function(template, values, item) {
						values.title = item.el.attr('title');
					}
				}
			});
			
		}

		if(jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0)
		{	
			/* magnificPopup for Play video function end */
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		
		}
		
	}
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				} else {
					menu.removeClass('is-fixed');
				}
				
				
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		'use strict';
		
		/* masonry by  = bootstrap-select.min.js */
		if(jQuery('#masonry, .masonry').length > 0)
		{
			jQuery('.filters li').removeClass('active');
			jQuery('.filters li:first').addClass('active');
			var self = jQuery("#masonry, .masonry"); 
			var filterValue = "";
	 
			if(jQuery('.card-container').length > 0)
			{
				var gutterEnable = self.data('gutter');
				
				var gutter = (self.data('gutter') === undefined)?0:self.data('gutter');
				gutter = parseInt(gutter);
				
				
				var columnWidthValue = (self.attr('data-column-width') === undefined)?'':self.attr('data-column-width');
				if(columnWidthValue != ''){columnWidthValue = parseInt(columnWidthValue);}
				
				self.imagesLoaded(function () {
					filter: filterValue,
					self.masonry({
						gutter: gutter,
						columnWidth:columnWidthValue, 
						//columnWidth:3, 
						//gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container",
						//horizontalOrder: true,
						//fitWidth: true,
						//stagger: 30
						//containerStyle: null
						//percentPosition: true
					});
					
				}); 
			} 
		}
		if(jQuery('.filters').length)
		{
			jQuery(".filters li:first").addClass('active');
			
			jQuery(".filters").on("click", "li", function() {
				
				jQuery('.filters li').removeClass('active');
				jQuery(this).addClass('active');
				
				var filterValue = $(this).attr("data-filter");
				self.isotope({ 
					filter: filterValue,
					masonry: {
						gutter: gutter,
						columnWidth: columnWidthValue,
						isAnimated: true,
						itemSelector: ".card-container"
					}
				});
			});
		}
		/* masonry by  = bootstrap-select.min.js end */
	}
	
	/* Counter Number ============ */
	var counter = function(){
		if(jQuery('.counter').length > 0){
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
		}
	}
	
	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		/* Video responsive function end */
	}
	
	/* Gallery Filter ============ */
	var handleFilterMasonary = function(){
		/* gallery filter activation = jquery.mixitup.min.js */ 
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				$(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if(jQuery('.gallery-filter.masonary').length){
			jQuery('.gallery-filter.masonary').on('click','span', function(){
				var selector = $(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}
	
	/* Bgeffect ============ */
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	/* Handel Resize ============ */
	var handelResize = function (){
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);			
		});
	}
	
	/* Light Gallery ============ */
	var lightGallery = function (){
		if(($('#lightgallery, .lightgallery').length > 0)){
			$('#lightgallery, .lightgallery').lightGallery({
				selector : '.lightimg',
				loop:true,
				share:false,
				download:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
	}

	/* Wow Animation ============ */
	var wow_animation = function(){
		if($('.wow').length > 0){
			var wow = new WOW({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	/* Current Active Menu ============ */
	var handleCurrentActive = function() {
		for (var nk = window.location, o = $("ul.navbar a").filter(function(){
			return this.href == nk;
		})
		.addClass("active").parent().addClass("active");;){
			if (!o.is("li")) break;
			o = o.parent().addClass("show").parent('li').addClass("active");
		}
	}
	
	/* Default Select ============ */
	var bsSelect = function(){
		if(jQuery.isFunction($.fn.selectpicker)){
			$('.default-select').selectpicker();
		}
	}
	
	/* Split Box ============ */
	var isScrolledIntoView = function (elem){
		var $elem = $(elem);
		var $window = $(window);

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	
	var splitImageAnimation = function (){
		$(window).on('scroll',function(){
			$('.split-box').each(function(){
				if(isScrolledIntoView($(this))){
					$(this).addClass('split-active');
				}
			});
		});
	}
	
	// WebsiteLaunchDate
	var WebsiteLaunchDate = new Date();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
	
	
	/* handleDonateFormFill ============ */
	var handleDonateFormFill = function(){
		if(jQuery('.donate-input').length > 0 ){
			
			jQuery(".form-check-input").on('change', function () {
				
				var thisVal = jQuery(this).val();
				jQuery('.donate-input').val(thisVal);
			});

			jQuery(".donate-input").on('keypress', function (event) {
				var thisVal = jQuery(this).val();

				if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
		           event.preventDefault(); //stop character from entering input
		       }
				jQuery('.donate-fill').prop('checked', false);
			})
		}	
	}
	
	//CurrentYear-Function
	
	var setCurrentYear = function(){
		const currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let elements = document.getElementsByClassName('current-year'); 

		for (const element of elements) {
		  element.innerHTML = currentYear;
		}
  	}
	
	/* Function ============ */
	return {
		init:function(){
			counter();
			dzTheme();
			MagnificPopup();
			setCurrentYear();
			scrollTop();
			headerFix();
			//onePageLayout();
			handleVideo();
			handleFilterMasonary();
			handelResize();
			lightGallery();
			jQuery('.modal').on('show.bs.modal', reposition);
			wow_animation();
			handleCurrentActive();
			bsSelect();
			masonryBox();
			handlePageOnScroll();
			splitImageAnimation();
			handleResizeElement();
			handleDonateFormFill();
		},

		load:function(){
			masonryBox();
		},
		
		resize:function(){
			screenWidth = $(window).width();
			dzTheme();
			setTimeout(function(){
				handleResizeElement();
			}, 500);
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	
	Akcel.init();
	
	$('a[data-toggle="tab"]').click(function(){
		// todo remove snippet on bootstrap v4
		$('a[data-toggle="tab"]').click(function() {
		  $($(this).attr('href')).show().addClass('show active').siblings().hide();
		})
	});	
		
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function(){
	'use strict'; 
	
	Akcel.load();
	
	setTimeout(function(){
		jQuery('#loading-area').fadeOut();
	}, 2000);
	
});
/* Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function(){
	'use strict';
	Akcel.resize();
});
/* Window Resize END */


(function ($) {
  "use strict";

  /*----------------------------- Site Loader & Popup --------------------*/
  $(window).on("load", function () {
    $("#gi-overlay").fadeOut("slow");
  });

  /*----------------------------- Scroll animation -------------------------------- */
  new WOW().init();

  /*--------------------- Mobile menu sidebar JS -------------------------------- */
  $('.gi-site-menu-icon').on("click", function () {
    $('.gi-mobile-menu-overlay').fadeIn();
    $('.gi-mobile-menu').addClass("gi-menu-open");
  });

  $('.gi-mobile-menu-overlay, .gi-close-menu').on("click", function () {
    $('.gi-mobile-menu-overlay').fadeOut();
    $('.gi-mobile-menu').removeClass("gi-menu-open");
  });

  function ResponsiveMobilemsMenu() {
    var $msNav = $(".gi-menu-content, .overlay-menu"),
      $msNavSubMenu = $msNav.find(".sub-menu");
    $msNavSubMenu.parent().prepend('<span class="menu-toggle"></span>');

    $msNav.on("click", "li a, .menu-toggle", function (e) {
      var $this = $(this);
      if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  ResponsiveMobilemsMenu();

  /*----------------------------- Category Sidebar js | Toggle Icon OnClick Open sidebar  -----------------------------------*/
  $(".gi-category-toggle").on("click", function () {
    $(".gi-side-cat-overlay").fadeIn();
    $(".gi-category-sidebar").addClass("gi-open-cat");
  });

  $(".gi-close").on("click", function () {
    $(".gi-category-sidebar").removeClass("gi-open-cat");
    $(".gi-side-cat-overlay").fadeOut();
  });

  $(".gi-side-cat-overlay").on("click", function () {
    $(".gi-category-sidebar").removeClass("gi-open-cat");
    $(".gi-side-cat-overlay").fadeOut();
  });

  /*--------------------- Category Sidebar Dropdowns js ---------------------- */
  $(document).ready(function () {
    $(".gi-sidebar-block .gi-sb-block-content ul li ul").addClass("gi-cat-sub-dropdown");

    $(".gi-sidebar-block .gi-sidebar-block-item").on("click", function () {
      var $this = $(this).closest('.gi-sb-block-content').find('.gi-cat-sub-dropdown');
      $this.slideToggle('slow');
      $('.gi-cat-sub-dropdown').not($this).slideUp('slow');
    });
  });

  /*--------------------- Cart sidebar JS -------------------------------- */
  $('.gi-cart-toggle').on("click", function (e) {
    e.preventDefault();
    $(".gi-side-cart-overlay").fadeIn();
    $('.gi-side-cart').addClass("gi-open-cart");
  });
  $('.gi-side-cart-overlay, .gi-cart-close').on("click", function (e) {
    e.preventDefault();
    $(".gi-side-cart-overlay").fadeOut();
    $('.gi-side-cart').removeClass("gi-open-cart");
  });

  /*--------------------- location Toggle MenuBar ---------------------- */
  $('.loc-list').on('click', function () {
    var mslocname = $(this).find('.gi-detail').html();
    $(".gi-location-title").html(mslocname);
    $(".gi-location-title").parent().attr("title", mslocname);
  });

  /*----------------------------- Qty Plus Minus Button  ------------------------------ */

  /*--------------------- Team (About Page) ---------------------- */
  $('.gi-team').owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  });

  /*--------------------- New product section Slider ---------------------- */
  $('.new-product-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      421: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1367: {
        items: 5
      }
    }
  });

  /*--------------------- Category slider section (Home Page) ---------------------- */
  $('.gi-category-block').owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  });

  /*--------------------- Add More Product slider section (Single Product Page) ---------------------- */
  $('.gi-add-more-slider').owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 3
      }
    }
  });

  /*--------------------- Testimonial Slider ---------------------- */
  $('#gi-testimonial-slider').owlCarousel({
    margin: 0,
    loop: true,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    smartSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1367: {
        items: 1
      }
    }
  });

  /*----------------------------- Filter Icon OnClick Open filter Sidebar on shop page -----------------------------------*/
  $(".filter-toggle-icon").on("click", function () {
    $(".filter-sidebar-overlay").fadeIn();
    $(".gi-filter-sidebar").addClass("filter-sidebar-open");
  });

  $(".filter-close, .filter-sidebar-overlay").on("click", function () {
    $(".gi-filter-sidebar").removeClass("filter-sidebar-open");
    $(".filter-sidebar-overlay").fadeOut();
  });

  /*--------------------- Footer Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-footer-links").addClass("gi-footer-dropdown");

    $('.gi-footer-heading').append("<div class='gi-heading-res'><i class='fi-rr-angle-small-down' aria-hidden='true'></i></div>");

    $(".gi-footer-heading .gi-heading-res").on("click", function () {
      var $this = $(this).closest('.footer-top .col-sm-12').find('.gi-footer-dropdown');
      $this.slideToggle('slow');
      $('.gi-footer-dropdown').not($this).slideUp('slow');
    });
  });

  /*--------------------- Wishlist notify js ---------------------- */
  $('.wishlist').on("click", function () {
    $('.gi-wish-notify').remove();
    $('.gi-compare-notify').remove();
    $('.gi-cart-notify').remove();

    var isWishlist = $(this).hasClass("active");
    if (isWishlist) {
      $(this).removeClass("active");
      $('footer').after('<div class="gi-wish-notify"><p class="wish-note">Remove product on <a href="wishlist.html"> Wishlist</a> Successfully!</p></div>');
    } else {
      $(this).addClass("active");
      $('footer').after('<div class="gi-wish-notify"><p class="wish-note">Add product in <a href="wishlist.html"> Wishlist</a> Successfully!</p></div>');
    }

    setTimeout(function () {
      $('.gi-wish-notify').fadeOut();
    }, 2000);
  });

  /*--------------------- Compare notify js ---------------------- */
  $('.compare').on("click", function () {
    $('.gi-wish-notify').remove();
    $('.gi-compare-notify').remove();
    $('.gi-cart-notify').remove();

    var isCompare = $(this).hasClass("active");
    if (isCompare) {
      $(this).removeClass("active");
      $('footer').after('<div class="gi-compare-notify"><p class="compare-note">Remove product on <a href="compare.html"> Compare list</a> Successfully!</p></div>');
    } else {
      $(this).addClass("active");
      $('footer').after('<div class="gi-compare-notify"><p class="compare-note">Add product in <a href="compare.html"> Compare list</a> Successfully!</p></div>');
    }


    setTimeout(function () {
      $('.gi-compare-notify').fadeOut();
    }, 2000);
  });

  /*--------------------- Add to cart button notify js ---------------------- */
  $('.add-to-cart').on("click", function () {
    $('.gi-wish-notify').remove();
    $('.gi-compare-notify').remove();
    $('.gi-cart-notify').remove();
    $('footer').after('<div class="gi-cart-notify"><p class="compare-note">Add product in <a href="cart.html"> Cart</a> Successfully!</p></div>');
    setTimeout(function () {
      $('.gi-cart-notify').fadeOut();
    }, 2000);
  });

  /*----------------------------- Cart page Shipping Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-sb-block-content .gi-ship-title").on("click", function () {
      $('.gi-sb-block-content .gi-cart-form').slideToggle('slow');
    });
  });

  /*----------------------------- Cart page Apply Coupen Toggle -------------------------------- */
  $(document).ready(function () {
    $(".gi-cart-coupan").on("click", function () {
      $('.gi-cart-coupan-content').slideToggle('slow');
    });
    $(".gi-checkout-coupan").on("click", function () {
      $('.gi-checkout-coupan-content').slideToggle('slow');
    });
  });

  /*----------------------------- Cart Page Qty Plus Minus Button  ------------------------------ */
//   var CartQtyPlusMinus = $(".cart-qty-plus-minus");
//   CartQtyPlusMinus.append('<div class="ms_cart_qtybtn"><div class="inc ms_qtybtn">+</div><div class="dec ms_qtybtn">-</div></div>');
//   $(".cart-qty-plus-minus .ms_cart_qtybtn .ms_qtybtn").on("click", function () {
//     var $cartqtybutton = $(this);
//     var CartQtyoldValue = $cartqtybutton.parent().parent().find("input").val();
//     if ($cartqtybutton.text() === "+") {
//       var CartQtynewVal = parseFloat(CartQtyoldValue) + 1;
//     } else {

//       if (CartQtyoldValue > 1) {
//         var CartQtynewVal = parseFloat(CartQtyoldValue) - 1;
//       } else {
//         CartQtynewVal = 1;
//       }
//     }
//     $cartqtybutton.parent().parent().find("input").val(CartQtynewVal);
//   });

  /*----------------------------- Sidebar Block Toggle (Checkout & Cart page) -------------------------------- */
  $(document).ready(function () {
    $(".gi-shop-sidebar .gi-sidebar-block .gi-sb-block-content,.gi-shop-sidebar-2 .gi-sidebar-block .gi-sb-block-content, .gi-blogs-leftside .gi-sidebar-block .gi-sb-block-content, .gi-cart-rightside .gi-sidebar-block .gi-sb-block-content, .gi-checkout-rightside .gi-sidebar-block .gi-sb-block-content").addClass("gi-sidebar-dropdown");

    $('.gi-sidebar-title').append("<div class='gi-sidebar-res'><i class='gicon gi-angle-down'></i></div>");

    $(".gi-sidebar-title .gi-sidebar-res").on("click", function () {
      // alert();
      var $this = $(this).closest('.gi-shop-sidebar .gi-sidebar-block, .gi-shop-sidebar-2 .gi-sidebar-block, .gi-blogs-leftside .gi-sidebar-block, .gi-cart-rightside .gi-sidebar-block, .gi-checkout-rightside .gi-sidebar-wrap').find('.gi-sidebar-dropdown, .gi-sb-block-content');
      $this.slideToggle('slow');
    });
  });

  /*----------------------------- Remove Product (Compare page) -------------------------------- */
  $('.remove-compare-product').on("click", function () {
    $(this).parent().fadeOut();
  });

  /*----------------------------- Accordians toggle (faq page) -------------------------------- */
  $('.gi-accordion-header').on("click", function () {
    $(this).parent().siblings().children(".gi-accordion-body").slideUp();
    $(this).parent().find(".gi-accordion-body").slideToggle();
  });

  /*----------------------------- List Grid View -------------------------------- */
  $('.gi-gl-btn').on('click', 'button', function () {
    var $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
  });

  // for 100% width list view
  function showList(e) {
    var $gridCont = $('.shop-pro-inner');
    var $listView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.addClass('list-view');
    $listView.addClass('width-100');
  }

  function gridList(e) {
    var $gridCont = $('.shop-pro-inner');
    var $gridView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.removeClass('list-view');
    $gridView.removeClass('width-100');
  }

  $(document).on('click', '.btn-grid', gridList);
  $(document).on('click', '.btn-list', showList);

  // for 50% width list view
  function showList50(e) {
    var $gridCont = $('.shop-pro-inner');
    var $listView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.addClass('list-view-50');
    $listView.addClass('width-50');
  }

  function gridList50(e) {
    var $gridCont = $('.shop-pro-inner');
    var $gridView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.removeClass('list-view-50');
    $gridView.removeClass('width-50');
  }

  $(document).on('click', '.btn-grid-50', gridList50);
  $(document).on('click', '.btn-list-50', showList50);

  /*----------------------------- Price Range slider ( Shop page ) -------------------------------- */
  const slider = document.getElementById('gi-sliderPrice');
  if (slider) {
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = document.querySelectorAll('input.filter__input');

    noUiSlider.create(slider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: step,
      range: {
        'min': rangeMin,
        'max': rangeMax
      },

      // make numbers whole
      format: {
        to: value => value,
        from: value => value
      }
    });

    // bind inputs with noUiSlider 
    slider.noUiSlider.on('update', (values, handle) => {
      filterInputs[handle].value = values[handle];
    });

    filterInputs.forEach((input, indexInput) => {
      input.addEventListener('change', () => {
        slider.noUiSlider.setHandle(indexInput, input.value);
      })
    });
  }

  /*----------------------------- Product Image Zoom --------------------------------*/
  $('.zoom-image-hover').zoom();


})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
        var searchIcon = document.querySelector('.btn-search');
        var searchInput = document.querySelector('.search-input');
        
        searchIcon.addEventListener('click', function() {
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                document.querySelector('.input-search').focus();
            }
        });
    });
	/*----------------------------- Filter Icon OnClick Open filter Sidebar on shop page -----------------------------------*/
  $(".filter-toggle-icon").on("click", function () {
    $(".filter-sidebar-overlay").fadeIn();
    $(".gi-filter-sidebar").addClass("filter-sidebar-open");
  });

  $(".filter-close, .filter-sidebar-overlay").on("click", function () {
    $(".gi-filter-sidebar").removeClass("filter-sidebar-open");
    $(".filter-sidebar-overlay").fadeOut();
  });




const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}


