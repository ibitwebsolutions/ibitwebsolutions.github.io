(function($){
	'use-strict';


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Load
	 --------------------------------------------- */
	$(window).load(function(){
		initPreloaderFade();
	});


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Resize
	 --------------------------------------------- */
	$(window).resize(function(){
		initHeroHeight();
		initRespinitNavMenu();
		initSkillWrapper();
	});


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Scroll
	 --------------------------------------------- */
	$(window).scroll(function(){
		initHeaderAnimation();
		initSearchAreaHide();
		initShoppingCartHide();
		initBackToTop();
	});


	/* ---------------------------------------------
	 Initializing All Functions
	 --------------------------------------------- */
	initHeroHeight();
	initSectionHightlight();
	initSectionBackground();
	initSectionOverlay();
	initSearchArea();
	initCartArea();
	initAnimateScroll();
	initNavMenu();
	initParallaxBackground();
	initSkillWrapper();
	initMagnificPopup();
	initPortfolio();
	initCounterUp();
	initNewsTicker();
	initMasonry();
	initMessageBoxHide();
	initProgressBar();
	initPieChart();
	initAccordion();
	initCarousel();
	initWowAnimation();
	initContactForm();
	initGoogleMap();



	/* ---------------------------------------------
	 Preloader Fadeout
	 --------------------------------------------- */
	function initPreloaderFade(){
		$('body').imagesLoaded(function(){
			$('.preloader-wrapper').fadeOut();
		});
	}


	/* ---------------------------------------------
	 Section Highlighting
	 --------------------------------------------- */
	function initSectionHightlight(){
		$('section').each(function(){
			$(this).waypoint(function(direction){
				if(direction === 'down'){
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-section');
					$(current_section_link).addClass('active-section');
				}
			} , {offset: '130px'});
			$(this).waypoint(function(direction){
				if(direction === 'up'){
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-section');
					$(current_section_link).addClass('active-section');
				}
			} , {offset: function(){return -$(this).height() + 130;}});
		});
	}


	/* ---------------------------------------------
	 Hero Height
	 --------------------------------------------- */
	function initHeroHeight(){
		var winH = $(window).height();
		$('.hero-height').height(winH);
	}


	/* ---------------------------------------------
	 Section Background
	 --------------------------------------------- */
	function initSectionBackground(){
		$(".section-cover").each(function(){
			if ($(this).attr("data-cover-bg")){
				$(this).css({
					"background": "url(" + $(this).data("cover-bg") + ")",
					'background-position': 'center top',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
			}
		});
	}


	/* ---------------------------------------------
	 Section Overlay
	 --------------------------------------------- */
	function initSectionOverlay(){
		$(".section-overlay").each(function(){
			if ($(this).attr("data-overlay-bg")){
				$(this).css({
					"background": $(this).data("overlay-bg")
				});
			}
		});
	}


	/* ---------------------------------------------
	 Parallax Background
	 --------------------------------------------- */
	function initParallaxBackground(){
		if(!device.tablet() && !device.mobile()){
			$('section[data-bg-type="parallax"]').each(function(){
				$(this).parallax("50%", 0.3);
			});

			$('section[data-bg-type="parallax"]').each(function(){
				$(this).css({'background-attachment': 'fixed'});
			});
		}
	}


	/* ---------------------------------------------
	 Search Area
	 --------------------------------------------- */
	function initSearchArea(){
		$('.search-open').on('click', function(){
			if($('.search-area').hasClass('search-area-hidden')){
				$('.search-area').removeClass('search-area-hidden');
				$('.search-area').addClass('search-area-visible');
			}
		});

		$('html').on('click', function(){
			if($('.search-area').hasClass('search-area-visible')){
				$('.search-area').removeClass('search-area-visible');
				$('.search-area').addClass('search-area-hidden');
			}
		});

		$('.search-area, .search-open').on('click', function(e){
			e.stopPropagation();
		});
	}


	/* ---------------------------------------------
	 Cart Area
	 --------------------------------------------- */
	function initCartArea(){
		$('.cart-open').on('click', function(){
			if($('.cart-area').hasClass('cart-area-hidden')){
				$('.cart-area').removeClass('cart-area-hidden');
				$('.cart-area').addClass('cart-area-visible');
			}else if($('.cart-area').hasClass('cart-area-visible')){
				$('.cart-area').removeClass('cart-area-visible');
				$('.cart-area').addClass('cart-area-hidden');
			}
		});

		$('html').on('click', function(){
			if($('.cart-area').hasClass('cart-area-visible')){
				$('.cart-area').removeClass('cart-area-visible');
				$('.cart-area').addClass('cart-area-hidden');
			}
		});

		$('.cart-area, .cart-open').on('click', function(e){
			e.stopPropagation();
		});
	}


	/* ---------------------------------------------
	 Search Area Hide On Scroll
	 --------------------------------------------- */
	function initSearchAreaHide(){
		if($(window).scrollTop() < 100){
			if($('.search-area').hasClass('search-area-visible')){
				$('.search-area').removeClass('search-area-visible');
				$('.search-area').addClass('search-area-hidden');
			}
		}
	}


	/* ---------------------------------------------
	 Animate Scroll
	 --------------------------------------------- */
	function initAnimateScroll(){
		$('.animatescroll-link').on('click', function(e){
			return false;
		});
	}


	/* ---------------------------------------------
	 Navigation Menu
	 --------------------------------------------- */
	function initNavMenu(){
		$('.sub-menu').mouseenter(function(e){
			e.stopPropagation();
			if($(window).width() > 1024){
				$(this).children('.sub-menu-content').fadeIn();
			}

			$(this).mouseleave(function(){
				if($(window).width() > 1024){
					$(this).children('.sub-menu-content').fadeOut();
				}
			});
		});

		$('.sub-menu').on('click', function(e){
			e.stopPropagation();
			if($(window).width() <= 1024){
				$(this).children('.sub-menu-content').slideToggle();
			}
		});

		$('.menu-bar').on('click', function(){
			if($(window).width() <= 1024){
				$('.main-nav').slideToggle();
			}
		});
	}


	/* ---------------------------------------------
	 Responsive Navigation Menu
	 --------------------------------------------- */
	function initRespinitNavMenu(){
		if($(window).width() > 991 && $('.main-nav').css('display') == 'none'){
			$('.main-nav').css({'display': 'block'});
		}
	}


	/* ---------------------------------------------
	 Shopping Cart Hide On Scroll
	 --------------------------------------------- */
	function initShoppingCartHide(){
		if($(window).scrollTop() < 100){
			if($('.cart-area').hasClass('cart-area-visible')){
				$('.cart-area').removeClass('cart-area-visible');
				$('.cart-area').addClass('cart-area-hidden');
			}
		}
	}


	/* ---------------------------------------------
	 Header Animation
	 --------------------------------------------- */
	function initHeaderAnimation(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >= 100){
			$('.header').removeClass('header-hidden');
			$('.header').addClass('header-visible');
		}else{
			$('.header').removeClass('header-visible');
			$('.header').addClass('header-hidden');
		}
	}


	/* ---------------------------------------------
	 Skill Wrapper Height
	 --------------------------------------------- */
	function initSkillWrapper(){
		var tabH = $('.service-wrapper').height();
		$('.skill-wrapper').css({'height': tabH});	
	}


	/* ---------------------------------------------
	 Magnific Popup Plugin
	 --------------------------------------------- */
	function initMagnificPopup(){
		$('.image-mfp').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$(".video-mfp").magnificPopup({
			type: 'iframe',
			gallery: {
				enabled: true
			}
		});
	}


	/* ---------------------------------------------
	 Masonry
	 --------------------------------------------- */
	function initMasonry(){
		$(".masonry").imagesLoaded(function(){
			$(".masonry").masonry();
		});
	}


	/* ---------------------------------------------
	 Portfolio
	 --------------------------------------------- */
	function initPortfolio(){
		$('.portfolio-items').imagesLoaded(function(){
			$('.portfolio-items').show();
			$('.portfolio-items').isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});

		$('.filter').find('a').on('click', function(){
			$('.portfolio-items').isotope({
				filter	: $(this).attr('data-filter'),
				animationOptions: {
					duration: 750,
					queue: false,
				}
			});
			return false;
		});

		$('.filter a').on('click', function(){
			if (!$(this).hasClass('active')){
				$('.filter a').removeClass('active');
				$(this).addClass('active');
			}
		});

		$(window).resize(function(){
			$('.portfolio-items').isotope({
				filter	: $('.filter').find('a.active').attr('data-filter'),
				animationOptions: {
					duration: 750,
					queue: false,
				}
			});
			return false;
		});

	}


	/* ---------------------------------------------
	 CounterUp
	 --------------------------------------------- */
	function initCounterUp(){
		$('.counterup').counterUp({
			delay: 10,
			time: 1500
		});
	}



	/* ---------------------------------------------
	 News Ticker
	 --------------------------------------------- */
	function initNewsTicker(){
		$('.intro-newsticker').newsTicker({
			row_height: 100,
			max_rows: 1,
			speed: 600,
			direction: 'up',
			duration: 4000,
			autostart: 1,
			pauseOnHover: 0
		});
	}



	/* ---------------------------------------------
	 Message Box Hiding Animation
	 --------------------------------------------- */
	function initMessageBoxHide(){
		$(".message-box").each(function(){
			if($(this).hasClass('message-box-visible')){
				$('.message-box-visible .message-box-close').on('click', function(){
					$(this).each(function(){
						$(this).parents('.message-box').removeClass('message-box-visible mgb-20');
						$(this).parents('.message-box').addClass('message-box-hidden');
					});
				});
			}
		});
	}



	/* ---------------------------------------------
	 Progress Bar Animation
	 --------------------------------------------- */
	function initProgressBar(){
		$('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});

			setTimeout(function() {
				$this.filter(':visible').waypoint(function(dir) {
					if( dir === 'down' ) {
						$this.css('width', width + '%');
					}
				} , { offset: '100%' } );
			}, 500);
		});
	}


	/* ---------------------------------------------
	 Pie Chart Animation
	 --------------------------------------------- */
	function initPieChart(){
		$('.pie-chart').each(function(){
			var $this = $(this);
			var pie_width = $this.attr('data-width');
			var pie_bar = $this.attr('data-bar-color');
			var pie_track = $this.attr('data-track-color');
			var pie_cap = $this.attr('data-cap');
			setTimeout(function() {
				$this.waypoint(function() {
					$(this).easyPieChart({
						lineWidth: pie_width,
						lineCap: pie_cap,
						barColor: pie_bar,
						trackColor: pie_track,
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});
				} , { offset: '100%' } );
			}, 500);
		});
	}



	/* ---------------------------------------------
	 Accordion Animation
	 --------------------------------------------- */
	function initAccordion(){
		$('.accordion').on('click', '.accordion-title', function(e){
			e.preventDefault();
			var $this = $(this);

			if($this.closest('.accordion').hasClass('accordion-toggle')) {
				if($this.hasClass('accordion-active')) {
					$this.next().slideUp('normal');
					$this.removeClass("accordion-active");
				}
			} else {
				$this.closest('.accordion').find('.accordion-active').next().slideUp('normal');
				$this.closest('.accordion').find('.accordion-title').removeClass("accordion-active");
			}

			if($this.next().is(':hidden') === true) {
				$this.next().slideDown('normal');
				$this.addClass("accordion-active");
			}
		});
		$('.accordion .accordion-data').hide();
		$('.accordion .accordion-active').next().slideDown('normal');
	}



	/* ---------------------------------------------
	 All Carousels
	 --------------------------------------------- */
	function initCarousel(){
		$('.carousel').carousel({
			interval: 5000
		});

		$(".client-carousel-1").owlCarousel({
			autoPlay: true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
			items : 6,
			itemsDesktop : [991,3],
			itemsDesktopSmall : [768,3]
		});

		$('.blog-img-carousel').owlCarousel({
			pagination: false,
			navigation: true,
			autoPlay: true,
			singleItem : true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});


		$('.about-carousel').owlCarousel({
			navigation : false,
			singleItem : true,
			autoPlay: true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});


		$('.image-carousel').owlCarousel({
			navigation : true,
			singleItem : true,
			slideSpeed : 500,
			autoPlay: true,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.image-carousel-fade').owlCarousel({
			navigation : true,
			singleItem : true,
			slideSpeed : 500,
			transitionStyle : "fade",
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.image-carousel-backslide').owlCarousel({
			navigation : true,
			singleItem : true,
			slideSpeed : 500,
			transitionStyle : "backSlide",
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.image-carousel-godown').owlCarousel({
			navigation : true,
			singleItem : true,
			slideSpeed : 500,
			transitionStyle : "goDown",
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.image-carousel-fadeup').owlCarousel({
			navigation : true,
			singleItem : true,
			slideSpeed : 500,
			transitionStyle : "fadeUp",
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});

		$('.testimonial-slider-1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			autoplay: true,
			asNavFor: '.testimonial-slider-1-nav'
		});
		$('.testimonial-slider-1-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.testimonial-slider-1',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			prevArrow: '<button type="button" class="slick-prev">""</button>',
			nextArrow: '<button type="button" class="slick-next">""</button>',
			responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}



	/* ---------------------------------------------
	 Back To Top Animation
	 --------------------------------------------- */
	function initBackToTop(){
		if($(window).scrollTop() > 100){
			$('.back-to-top').addClass('back-to-top-visible');
			$('.back-to-top').removeClass('back-to-top-hidden');
		}else{
			$('.back-to-top').removeClass('back-to-top-visible');
			$('.back-to-top').addClass('back-to-top-hidden');
		}
	}



	/* ---------------------------------------------
	 Wow Animation
	 --------------------------------------------- */
	function initWowAnimation(){
		var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 150,
				mobile: false,
				live: true
			}
		);
		wow.init();
	}



	/* ---------------------------------------------
	 Contact Form
	 --------------------------------------------- */
	function initContactForm(){
		$("#c-form").validator().on("submit", function (e){
			if (e.isDefaultPrevented()){
				submitMSG(false, "One/Many field(s) are empty or invalid!");
			} else{
				e.preventDefault();
				submitForm();
			}
		});

		function submitForm(){
			var name = $("#name").val();
			var email = $("#email").val();
			var message = $("#message").val();

			$.ajax({
				type: "POST",
				url: 'http://internetmarketingaccelerator.com/class/form-process.php',
				dataType: "jsonp",
				crossDomain: true,
				data: {name: name, email: email, message: message},
				success : function(text){
					if (text == "success"){
						formSuccess();
					} else{
						submitMSG(false,text);
					}
				}
			});
		}

		function formSuccess(){
			$("#c-form")[0].reset();
			submitMSG(true, "WE'VE GOT YOUR MESSAGE! THANK YOU!")
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = "c-form-alert c-form-success fadeInUp animated";
			} else{
				var msgClasses = "c-form-alert c-form-error fadeInUp animated";
			}
			$("#c-form-submit").removeClass().addClass(msgClasses).text(msg);
		}
	}



	/* ---------------------------------------------
	 Google Map
	 --------------------------------------------- */
	function initGoogleMap(){
		var latitude = document.getElementById('google-map').getAttribute('data-latitude'),
			longitude = document.getElementById('google-map').getAttribute('data-longitude'),
			map_zoom = 14;
		var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = ( is_internetExplorer11 ) ? 'img/marker.png' : 'img/marker.svg';
		var	main_color = '#000000',
			saturation_value= -100,
			brightness_value= 20;
		var style= [
			{
				elementType: "labels",
				stylers: [
					{saturation: saturation_value}
				]
			},
			{
				featureType: "poi",
				elementType: "labels",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [
					{visibility: "off"}
				]
			},
			{
				featureType: "road.local",
				elementType: "labels.icon",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "labels.icon",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.government",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.sport_complex",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.attraction",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.business",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "landscape",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "road",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" },
					{ lightness: brightness_value },
					{ saturation: saturation_value }
				]
			}
		];
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style,
		}
		var map = new google.maps.Map(document.getElementById('google-container'), map_options);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			visible: true,
			icon: marker_url,
		});
		function CustomZoomControl(controlDiv, map) {
			var controlUIzoomIn= document.getElementById('g-map-zoom-in'),
				controlUIzoomOut= document.getElementById('g-map-zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);
			google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
				map.setZoom(map.getZoom()+1)
			});
			google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
				map.setZoom(map.getZoom()-1)
			});
		}
		var zoomControlDiv = document.createElement('div');
		var zoomControl = new CustomZoomControl(zoomControlDiv, map);
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
	}

})(jQuery);
