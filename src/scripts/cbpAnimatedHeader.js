/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var docElem = document.documentElement;
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$('.navbar-fixed-top').addClass('navbar-shrink');
      $('.scroll-top').removeClass('hidden-sm hidden-xs');
      $('.scroll-top').fadeIn(500);
    }
		else {
			$('.navbar-fixed-top').removeClass('navbar-shrink');
	    $('.scroll-top').fadeOut(500,  function() {
	    $('.scroll-top').addClass('hidden-sm hidden-xs');
    });

		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
