var currentURL = window.location.href;

jQuery(window).on('load', function () {

	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-450px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-450px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//

});

// handle Theme Settings
var themeSettings = {
	themeFullColor: true,
	themeVersion: false,
	navMode: false,
	themeLayout: true,
	headerOption: true,
	themeCorner: false,
	backgroundColor: true,
	backgroundImage: true,
	backgroundPattern: true,
	rtl: false
}

var themeOption = ['themeFullColor', 'themeLayout', 'headerOption', 'navMode', 'themeCorner', 'themeVersion', 'backgroundColor', 'backgroundImage', 'backgroundPattern'];
themeOption['themeLayout'] = ['themeLayout_value'];
themeOption['themeFullColor'] = ['themeFullColor_value', 'themeFullColor_logo'];
themeOption['headerOption'] = ['headerOption_value'];
themeOption['navMode'] = ['navMode_value'];
themeOption['themeCorner'] = ['themeCorner_value'];
themeOption['themeVersion'] = ['themeVersion_value'];
themeOption['backgroundColor'] = ['backgroundColor_value'];
themeOption['backgroundImage'] = ['backgroundImage_value'];
themeOption['backgroundPattern'] = ['backgroundPattern_value'];

function themeFramePadding() {
	var themeOptionFrameValue = getCookie('frame_value');
	if (themeOptionFrameValue == '') {
		themeOptionFrameValue = 20;
	}
	if ($("#slider-range-3").length > 0) {
		$("#slider-range-3").unbind().slider({
			min: 20,
			max: 80,
			//value: 20,
			value: themeOptionFrameValue,
			animate: "slow",
			orientation: "horizontal",
			slide: function (event, ui) {
				frameSlider = ui.value;
				$('#' + this.id).prev().val(frameSlider + "px");
				$("#bg").css('padding', frameSlider + "px");
				setCookie('frame_value', frameSlider, 1);
			}
		});
	}
}

var dzSwitcher = function () {
	"use strict";

	addSwitcher();
	
	/* url color set */
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};
	
	var themeColor =  getUrlParameter('data-color');
	if(themeColor){
		var index = themeColor?.split('_')[1];
		const logoUrls = document.querySelectorAll('.color-skins li a');
		var logoImage = $(logoUrls[index - 1]).attr('data-logo-image');
		var logoSelector = $(logoUrls[index - 1]).attr('data-logo-selector');
		if(logoUrls && index){
			setCookie('themeFullColor_value','color_'+index,1);
			setCookie('themeFullColor_logo_selector',logoSelector,1);
			setCookie('themeFullColor_logo_image',logoImage,1);
		}
	}
	/* url color set */
	

	//=== Switcher panal slide function	=====================//
	var handleSwitcherSidebar = function () {
		jQuery('.switch-btn').on('click', function () {
			if (jQuery(this).hasClass('open')) {
				jQuery(this).addClass('closed');
				jQuery(this).removeClass('open');
				jQuery('.styleswitcher').animate({
					'left': '-450px'
				});
				jQuery('.styleswitcher-right').animate({
					'right': '-450px',
					'left': 'auto'
				});
			} else {
				if (jQuery(this).hasClass('closed')) {
					jQuery(this).addClass('open');
					jQuery(this).removeClass('closed');
					jQuery('.styleswitcher').animate({
						'left': '30px'
					});
					jQuery('.styleswitcher-right').animate({
						'right': '30px',
						'left': 'auto'
					});
				}
			}
			jQuery('.styleswitcher').toggleClass('open');
		});

		jQuery('.overlay-switch').on('click', function () {

			if (jQuery('.styleswitcher').hasClass('open')) {
				jQuery('.styleswitcher').animate({
					'left': '-450px'
				});
				jQuery('.styleswitcher').removeClass('open');
				jQuery('.switch-btn').removeClass('open');
				jQuery('.switch-btn').addClass('closed');
			} else {
				jQuery('.styleswitcher').animate({
					'left': '30px'
				});
				jQuery('.switch-btn').addClass('open');
				jQuery('.switch-btn').removeClass('closed');
			}
		});
	}
	//=== Switcher panal slide function END	=====================//

	//=== Set Theme Setting Url function start	=====================//
	var handleThemeUrlSetting = function () {
		var themeOptArry = document.querySelectorAll('.theme-option');
		themeOptArry.forEach((item, _) => {
			if (themeSettings[jQuery(item).attr('opt')] == false) {
				jQuery(item).remove();
			}
		})
		var settingUrlArry = [
			// {
			// 	url : [
			// 		"index-2",
			// 		"index-3",
			// 	],
			// 	optionRemove : [
			// 		"themeLayout" ,
			// 		"backgroundPattern"
			// 	]
			// },
			// {
			// 	url : [
			// 		"about-us",
			// 		"faq",
			// 	],
			// 	optionRemove : [
			// 		"themeFullColor",
			// 	]
			// },
		]
		var addCookiesArry = [
			{
				url: [
					"index",
				],
				cookiesAdd: [
					{
						option: "themeFullColor_value",
						value: "color_1",
					}
				]
			},
			{
				url: [
					"index-2",
				],
				cookiesAdd: [
					{
						option: "themeFullColor_value",
						value: "color_2",
					}
				]
			},
			{
				url: [
					"index-3",
				],
				cookiesAdd: [
					{
						option: "themeFullColor_value",
						value: "color_3",
					}
				]
			},
		]

		settingUrlArry.forEach((data, _) => {
			data.url.forEach((item, _) => {
				if (currentURL.indexOf(item) > -1) {
					data.optionRemove.forEach((option, _) => {
						jQuery("[opt=" + option + "]").remove();
						deleteCookie(option + '_value');
					})
				}
			})
		})

		// addCookiesArry.forEach((data,_) => {
		// 	data.url.forEach((item,_) => {
		// 		if(currentURL.indexOf(item) > -1){
		// 			data.cookiesAdd.forEach((option,_) => {
		// 				//if(getCookie(option.option,option.value).length == 0 || getCookie(option.option,option.value) == 1){
		// 					setCookie(option.option,option.value)
		// 				//}
		// 			})
		// 		}
		// 	})
		// })

	}
	//=== Set Theme Setting Url function start	=====================//

	//=== Set Theme Cookies on Click function start	=====================//
	var themePanelSave = function () {
		jQuery(document).on('click', '.theme-panel-save li a, .theme-panel-save li img', function () {
			var optionData = jQuery(this).parent().parent().attr('val');
			if (optionData == 'themeFullColor') {
				var optionValue = jQuery(this).data('color-theme');
			} else {
				var optionValue = jQuery(this).attr('dir');
			}
			if (optionData == 'backgroundColor') {
				deleteCookie('backgroundImage_value');
				deleteCookie('backgroundPattern_value');
			} else if (optionData == 'backgroundImage') {
				deleteCookie('backgroundColor_value');
				deleteCookie('backgroundPattern_value');
			} else if (optionData == 'backgroundPattern') {
				deleteCookie('backgroundColor_value');
				deleteCookie('backgroundImage_value');
			} else if (optionData == 'themeFullColor') {
				var themeLogoSelector = jQuery(this).data('logo-selector');
				var themeLogoImage = jQuery(this).data('logo-image');
				setCookie(optionData + '_logo_selector', themeLogoSelector, 1);
				setCookie(optionData + '_logo_image', themeLogoImage, 1);
			}
			setCookie(optionData + '_value', optionValue, 1);
		});
	}
	//=== Set Theme Cookies on Click function end =====================//

	//=== Change color Theme function start =====================//
	var handleThemeFullColor = function () {
		jQuery(document).on('click', '.color-skins li a', function () {
			jQuery('.color-skins li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			//jQuery(".skin").attr("href", 'css/skin/'+jQuery(this).data('color-theme')+'.css');

			body.attr('data-color', jQuery(this).data('color-theme'));

			var logoSelectorArr = jQuery(this).data('logo-selector').split(',');
			var logoSrcArr = jQuery(this).data('logo-image').split(',');
			var arrCount = logoSelectorArr.length;
			for (var i = 0; i < arrCount; i++) {
				jQuery(logoSelectorArr[i]).attr('src', logoSrcArr[i]);
			}
			return false;
		});
	}
	//=== Change color Theme function end =====================//

	//=== Background image change function	start =====================//
	var handleBackgroundImage = function () {
		jQuery('.background-switcher li img').on('click', function () {
			var imgbg = jQuery(this).attr('dir');
			jQuery('#bg').css({ backgroundImage: "url(" + imgbg + ")" });
			jQuery('.background-switcher li, .pattern-switcher li, .bg-color-switcher li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
		});
	}
	//=== Background image change function	end=====================//

	//=== Background pattern change function start =====================//
	var handleBackgroundPattern = function () {
		jQuery('.pattern-switcher li img').on('click', function () {
			var imgbg = jQuery(this).attr('dir');
			jQuery('#bg').css({ backgroundImage: "url(" + imgbg + ")" });
			jQuery("#bg").css("background-size", "auto");
			jQuery('.background-switcher li, .pattern-switcher li, .bg-color-switcher li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
		});
	}
	//=== Background pattern change function end=====================//

	//=== Background color change function start=====================//
	var handleBackgroundColor = function () {
		jQuery('.bg-color-switcher li a').on('click', function () {
			//var bgcolor = jQuery(this).attr('dir');
			//jQuery('#bg').css('background-color', bgcolor);
			jQuery('#bg').css('background-image', '');
			jQuery('.background-switcher li, .pattern-switcher li, .bg-color-switcher li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			body.attr('data-body-bg', jQuery(this).attr('dir'));
		});
	}
	//=== Background color change function end=====================//

	//=== Layout boxed & fullscreen change function start =====================//
	var handleThemeLayout = function () {
		if (getCookie('themeLayout_value').length == 0 || getCookie('themeLayout_value') == 1) {
			jQuery('.theme-background-wrapper').slideUp('slow');
		}
		var themeLayouts = document.querySelectorAll('.layout-view li a');
		jQuery('.layout-view li a').on('click', function () {
			/* themeLayouts.forEach(function(item){
				jQuery('body').removeClass(jQuery(item).attr('dir'));
			}) */
			jQuery('.layout-view li').removeClass('active');
			//jQuery('body').addClass(jQuery(this).attr('dir'));
			body.attr('data-layout', jQuery(this).attr('dir'));
			jQuery(this).parent().addClass('active');
			if (jQuery(this).attr('dir') === "frame") {
				jQuery('#ThemeRangeSlider').show('slow');
				jQuery(".main-bar-wraper").addClass('sticky-no');
				jQuery(".main-bar-wraper").removeClass('sticky-header');
			} else {
				jQuery('#ThemeRangeSlider').hide('slow');
			}
			if (jQuery(this).attr('dir') === "wide-layout") {
				jQuery('.theme-background-wrapper').slideUp('slow');
				jQuery("body").css({ 'background-image': '', 'background-color': '' });
			} else {
				jQuery('.theme-background-wrapper').slideDown('slow');
			}
			if (jQuery(this).attr('dir') == "wide-layout" || jQuery(this).attr('dir') == "boxed") {
				jQuery("body").css({ 'padding': '0' });
			} else {
				jQuery("body").css({ 'padding': '20px' });
			}
		})
		themeFramePadding();
	}
	//=== Layout boxed & fullscreen change function	end=====================//

	//=== Nav light & dark change function	start =====================//
	var handleThemeNav = function () {
		var themeNav = document.querySelectorAll('.nav-view li a');
		jQuery('.nav-view li a').on('click', function () {
			themeNav.forEach(function (item) {
				jQuery('.header-nav').removeClass(jQuery(item).attr('dir'));
			})
			jQuery('.nav-view li').removeClass('active');
			jQuery(this).parent().addClass('active');
			jQuery(".header-nav").addClass(jQuery(this).attr('dir'));
		});
	}
	//=== Nav light & dark change function	end =====================//	

	//=== Corner & Sharp Change function start=====================//
	var handleThemeRadius = function () {
		var themeRadius = document.querySelectorAll('.corner-view li a');
		jQuery('.corner-view li a').on('click', function () {
			themeRadius.forEach(function (item) {
				jQuery('body').removeClass(jQuery(item).attr('dir'));
			})
			jQuery('.corner-view li').removeClass('active');
			jQuery(this).parent().addClass('active');
			jQuery("body").addClass(jQuery(this).attr('dir'));
		});
	}
	//=== Corner & Sharp Change function end =====================//	

	//=== Layout light & dark Change function start =====================//
	var handleThemeVersion = function () {
		var themeVersions = document.querySelectorAll('.theme-version li a');
		jQuery('.theme-version li a').on('click', function () {
			themeVersions.forEach(function (item) {
				jQuery('body').removeClass(jQuery(item).attr('dir'));
			})
			jQuery('.theme-version li').removeClass('active');
			jQuery(this).parent().addClass('active');
			body.attr('data-theme-version', jQuery(this).attr('dir'));
			//for logo
			var tf_logo_selector = getCookie('themeFullColor_logo_selector');
			var tf_logo_image = getCookie('themeFullColor_logo_image');
			var logoSelectorArr = tf_logo_selector.split(',');
			var logoSrcArr = tf_logo_image.split(',');
			var arrCount = logoSelectorArr.length;
			for (var i = 0; i < arrCount; i++) {
				jQuery(logoSelectorArr[i]).attr('src', logoSrcArr[i]);
			}
		});

		if (currentURL.indexOf('dark') > -1) {
			body.attr('data-theme-version', "dark");
			//jQuery('.layout-dark .logo-dark img').attr('src','images/logo-white.png');
			setCookie('themeVersion_value', 'dark', '');
		} else {
			body.attr('data-theme-version', "light");
		}
	}
	//=== Layout light & dark Change function end =====================//	

	//=== Header view function start=====================//
	var handleThemeHeader = function () {
		var themeHeaders = document.querySelectorAll('.header-view li a');
		jQuery('.header-view li a').on('click', function () {
			themeHeaders.forEach(function (item) {
				jQuery('.main-bar-wraper').removeClass(jQuery(item).attr('dir'));
			})
			jQuery('.header-view li').removeClass('active');
			jQuery(this).parent().addClass('active');
			jQuery('.main-bar-wraper').addClass(jQuery(this).attr('dir'));

			body.attr('data-headerposition', jQuery(this).attr('dir'));

		});
	}
	//=== Header view function end=====================//

	return {
		init: function () {
			handleSwitcherSidebar();
			handleBackgroundImage();
			handleBackgroundPattern();
			handleBackgroundColor();
			handleThemeLayout();
			handleThemeRadius();
			handleThemeVersion();
			handleThemeHeader();
			handleThemeNav();
		},
		load: function () {
			handleThemeFullColor();
			themePanelSave();
			handleThemeVersion();
			handleThemeUrlSetting();
		}
	}

}();


jQuery(document).ready(function () {
	dzSwitcher.init();
});

jQuery(window).on('load', function () {

	dzSwitcher.load();

	setTimeout(function () {
		setThemePanel();
		setThemeOptionOnPage();
	}, 100);

});

var themeOptionArr = {
	themeFullColor_value: '',
	themeLayout_value: '',
	headerOption_value: '',
	backgroundColor_value: '',
	themeVersion_value: '',
};

function setThemeOptionOnPage() {

	jQuery.each(themeOptionArr, function (optionKey, optionValue) {
		var optionData = getCookie(optionKey);
		themeOptionArr[optionKey] = (optionData != '') ? optionData : dzSettingsOptions[optionKey];
	});
	dzSettingsOptions = themeOptionArr;
	new dzSettings(dzSettingsOptions);
}

function setThemePanel() {
	jQuery.each(themeOption, function (index, themeOptionItem) {

		themeOptionItemValue = getCookie(themeOptionItem + '_value');

		//console.log(index,themeOptionItem,themeOptionItemValue);

		if (themeOptionItemValue != '' && themeOptionItemValue != '1') {

			if (themeOptionItem == 'themeFullColor') {
				jQuery('.color-skins li').removeClass('active');
				if (themeOptionItemValue.indexOf('color_') > -1) {
					jQuery('.color-skins [data-color-theme="' + themeOptionItemValue + '"]').parent().addClass('active');
				}
			} else if (themeOptionItem == 'themeLayout') {
				if (themeOptionItemValue == 'boxed' || themeOptionItemValue == 'frame') {
					jQuery('.layout-view li').removeClass('active');
					jQuery('.layout-view .' + themeOptionItemValue + ' ').addClass('active');
				} else {
					jQuery('.theme-background-wrapper').hide('slow');
				}
				if (themeOptionItemValue == 'frame') {
					jQuery('#ThemeRangeSlider').show('slow');
					themeOptionFrameValue = getCookie('frame_value');
					if (themeOptionFrameValue == '') {
						themeOptionFrameValue = 20;
					}
					jQuery('#FramePadding').val(themeOptionFrameValue + "px");
					jQuery("#bg").css('padding', themeOptionFrameValue + "px");
				}
			} else if (themeOptionItem == 'headerOption') {
				jQuery('.' + themeOptionItem + '-view li').removeClass('active');
				if (themeOptionItemValue == 'sticky-header') {
					jQuery('.' + themeOptionItem + '-view').find('.header-fixed').addClass('active');

					jQuery('.header-fixed').addClass('active');
					jQuery('.header-static').removeClass('active');

				} else if (themeOptionItemValue == 'sticky-no') {
					jQuery('.' + themeOptionItem + '-view').find('.header-static').addClass('active');

					jQuery('.header-fixed').removeClass('active');
					jQuery('.header-static').addClass('active');
				}
				jQuery(".main-bar-wraper").addClass(themeOptionItemValue);
			} else if (themeOptionItem == 'themeVersion') {
				if (themeOptionItemValue == 'light') {
					jQuery('.light-theme').addClass('active');
					jQuery('.dark-theme').removeClass('active');

				} else if (themeOptionItemValue == 'dark') {
					jQuery('.dark-theme').addClass('active');
					jQuery('.light-theme').removeClass('active');
				}
			} else if (themeOptionItem == 'navMode') {
				if (themeOptionItemValue == 'nav-light') {
					jQuery(".header-nav").addClass('nav-light').removeClass('nav-dark');

					jQuery('.light-nav').addClass('active');
					jQuery('.dark-nav').removeClass('active');

				} else if (themeOptionItemValue == 'nav-dark') {
					jQuery(".header-nav").addClass('nav-dark').removeClass('nav-light');

					jQuery('.dark-nav').addClass('active');
					jQuery('.light-nav').removeClass('active');

				}
			} else if (themeOptionItem == 'themeCorner') {
				if (themeOptionItemValue == 'theme-sharped') {
					jQuery("body").addClass('theme-sharped').removeClass('theme-rounded');

					jQuery('.sharp-theme').addClass('active');
					jQuery('.round-theme').removeClass('active');

				} else if (themeOptionItemValue == 'theme-rounded') {
					jQuery("body").addClass('theme-rounded').removeClass('theme-sharped');

					jQuery('.round-theme').addClass('active');
					jQuery('.sharp-theme').removeClass('active');

				}
			} else if (themeOptionItem == 'backgroundColor' && themeOptionItemValue != '' && themeOptionItemValue != 1) {
				jQuery('#bg').css('background-image', '');

				/* To Selected */
				jQuery('.bg-color-switcher li').removeClass('active');
				jQuery('.bg-color-switcher [dir="' + themeOptionItemValue + '"]').parent().addClass('active');

			} else if (themeOptionItem == 'backgroundImage' && themeOptionItemValue != '' && themeOptionItemValue != 1) {

				jQuery('#bg').css({ backgroundImage: "url(" + themeOptionItemValue + ")" });


				/* To Selected */
				jQuery('.background-switcher li').removeClass('active');
				jQuery('.background-switcher [dir="' + themeOptionItemValue + '"]').parent().addClass('active');

			} else if (themeOptionItem == 'backgroundPattern' && themeOptionItemValue != '' && themeOptionItemValue != 1) {
				jQuery('#bg').css({ backgroundImage: "url(" + themeOptionItemValue + ")" });
				jQuery("#bg").css("background-size", "auto");

				/* To Selected */
				jQuery('.pattern-switcher li').removeClass('active');
				jQuery('.pattern-switcher [dir="' + themeOptionItemValue + '"]').parent().addClass('active');
			}
		}
	});

	var tf_logo_selector = getCookie('themeFullColor_logo_selector');

	if (tf_logo_selector != '') {
		var tf_logo_image = getCookie('themeFullColor_logo_image');

		var logoSelectorArr = tf_logo_selector.split(',');
		var logoSrcArr = tf_logo_image.split(',');
		var arrCount = logoSelectorArr.length;
		for (var i = 0; i < arrCount; i++) {
			jQuery(logoSelectorArr[i]).attr('src', logoSrcArr[i]);
		}
	}

	/* Switcher Direction Selected */
	if (currentURL.indexOf('xhtml-rtl') > -1) {
		jQuery('.rtl-theme').addClass('active');
		jQuery('.ltr-theme').removeClass('active');
	} else {
		jQuery('.rtl-theme').removeClass('active');
		jQuery('.ltr-theme').addClass('active');
	}

}

function setThemeLogo(themeOptionItemAttr) {
	var logo = getCookie(themeOptionItemAttr + '_logo');
	if (logo != '') {
		jQuery(".logo-white img").attr("src", logo);
		jQuery(".logo-dark img").attr("src", logo);
		jQuery(".logo-center .logo-c").attr("src", logo);
	}
}

function setCookie(cname, cvalue, exhours) {
	var d = new Date();
	d.setTime(d.getTime() + (30 * 60 * 1000)); /* 30 Minutes*/
	var expires = "expires=" + d.toString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


function deleteCookie(cname) {
	var d = new Date();
	d.setTime(d.getTime() + (1)); /* 1/1000 second*/
	var expires = "expires=" + d.toString();
	document.cookie = cname + "=1;" + expires + ";path=/";
}

function deleteAllCookie(reload = true) {
	jQuery.each(themeOption, function (index, themeOptionItem) {
		deleteCookie(themeOptionItem + '_value');
		deleteCookie(themeOptionItem + '_logo_selector');
		deleteCookie(themeOptionItem + '_logo_image');
	});
	if (reload) {
		location.reload();
	}
}
