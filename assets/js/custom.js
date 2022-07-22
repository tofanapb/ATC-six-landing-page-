(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        $(".menu_toggle").click(function () {
            $("..menu_area").slideToggle(800);
    
        });
    
        jQuery(window).resize(function () {
            var screenwidth = jQuery(window).width();
            if (screenwidth > 991) {
                jQuery('..menu_area').removeAttr("style");
            }
        });

//slider header
   $('.slider_inner_item').slick({
	dots: true,
	cssEase: 'linear',
	prevArrow: '<i class="fas fa-angle-left"></i>',
	nextArrow: '<i class="fas fa-angle-right"></i>',
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: '10px',
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 1,
			centerMode: true,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			centerMode: true,
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			centerMode: true,
		}
	}
		],
    });
    
//servics slider 
   $('.servics_slider_inner').slick({
	dots: false,
	cssEase: 'linear',
	prevArrow: '<i class="fas fa-angle-left"></i>',
	nextArrow: '<i class="fas fa-angle-right"></i>',
	slidesToShow: 7,
	slidesToScroll: 1,
	centerPadding: '10px',
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 4,
			centerMode: true,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 3,
			centerMode: true,
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 2,
			centerMode: true,
		}
	}
		],
    });

    $('.video_slider_inner').slick({
        infinite: true,
        dots: false,
        prevArrow: '<i class="fas fa-angle-left"></i>',
	    nextArrow: '<i class="fas fa-angle-right"></i>',
        arrows: true,
        autoplay: false,
        swipe: true,
        touchMove: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: true,
              }
          },
        ]
      });

    //tab body slider 
   $('.tab_slider_inner').slick({
	dots: false,
	cssEase: 'linear',
	prevArrow: '<i class="fas fa-angle-left"></i>',
	nextArrow: '<i class="fas fa-angle-right"></i>',
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: '10px',
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 1,
			centerMode: true,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			centerMode: true,
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 1,
			centerMode: true,
		}
	}
		],
    });

//team_slider 
   $('.team_slider_inner').slick({
	dots: false,
	cssEase: 'linear',
	prevArrow: '<i class="fas fa-angle-left"></i>',
	nextArrow: '<i class="fas fa-angle-right"></i>',
	slidesToShow: 4,
	slidesToScroll: 1,
	centerPadding: '10px',
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 3,
			centerMode: true,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			centerMode: true,
		}
	},
	{
		breakpoint: 575,
		settings: {
			slidesToShow: 2,
			centerMode: true,
		}
	}
		],
    });


        //       scroll_top   
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('.top_up').fadeIn();
                //$('.menu_fixed_area').addClass('menu_stiky_fixed');
            } else {
                $('.top_up').fadeOut();
               // $('.menu_fixed_area').removeClass('menu_stiky_fixed');
            }
        });

        $(".top_up").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });

        //video popup
        $('.video-play-btn').magnificPopup({
            type: 'iframe',


            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: '//www.youtube.com/embed/%id%?ref=0' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }

                    // you may add here more sources

                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }


        });
        // image popup
        $('.image_popup').magnificPopup({
            type: 'image'
            // other options
        });
        //gallery
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        



  
    });


}(jQuery));