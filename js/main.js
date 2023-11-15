jQuery(document).ready(function ($) {
	$("#DateCountdown").TimeCircles({
		"animation": "ticks",
		"bg_width": 1,
		"fg_width": 0.05,
		"use_top_frame": true,
		"circle_bg_color": "#e6dbde",
		"time": {
			"Days": {
				"text": "Days",
				"color": "#15ae85",
				"show": true
			},
			"Hours": {
				"text": "Hours",
				"color": "#cf137b",
				"show": true
			},
			"Minutes": {
				"text": "Mins",
				"color": "#0075bf",
				"show": true
			},
			"Seconds": {
				"text": "Sec",
				"color": "#fec500",
				"show": true
			}
		}
	});
	
});

// Team members
$(document).on('click','.ehover1',function(event){
	event.preventDefault();
})



//alert('about event loaded');
	function aboutEvent(){
		//odometer
	
		setTimeout(function(){
			odometer.innerHTML = 16;
		}, 1000);

		setTimeout(function(){
			odometer2.innerHTML = 70;
		}, 1000);

		setTimeout(function(){
			odometer3.innerHTML = 50;
		}, 1000);

		setTimeout(function(){
			odometer4.innerHTML = 40;
		}, 1000);
		
	}
	
	/*==========  GOTO TOP  ==========*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.go-top').addClass('active');
		} else {
			$('.go-top').removeClass('active');
		}
	});
	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: 0}, 500);
	});
	

// for popup video
    if ($('.popup-video').length > 0) {
    	$('.popup-video').magnificPopup({
    		type: 'iframe',
    		mainClass: 'mfp-fade',
    		removalDelay: 160,
    		preloader: false,
    		fixedContentPos: false
    	});
    }
	
	/*==========  MAGNIFIC POPUP ==========*/
    if ($('.popup').length > 0) {
        $('.popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }

        });
    }
	
	/*==========  STICKY MENU  ==========*/
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>1000 ){
			$('.sticky').addClass('sticky-header');
		} else {
			$('.sticky').removeClass('sticky-header');
		}
	});
	
	/*==========  ONEPAGE NAV  ==========*/
	 if ($('.main-nav').length > 0) {
		$('.main-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 1500,
			easing: "easeInOutExpo",
			filter: ':not(.dropdown-items>li>a)'
		});
	}
	
	
	/*==========  MAP  ==========*/
	var mapStyle=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:50},{visibility:"on"}]},
	{featureType:"poi",stylers:[{saturation:-100},{lightness:40},{visibility:"simplified"}]},
	{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},
	{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:20},{visibility:"on"}]},
	{featureType:"road.local",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},
	{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},
	{featureType:"administrative.province",stylers:[{visibility:"off"}]},
	{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},
	{lightness:-0},{saturation:-0}]},
	{featureType:"water",elementType:"geometry",stylers:[{hue:"#00baff"},
	{lightness:-10},{saturation:-95}]}];

	var mapWrapperID = '#map', draggableOp = ( $.browser.mobile === true ) ? false : true;

	if ( $(mapWrapperID).length > 0 && window.google && window.google.maps ) {

		window.mapOps = {
			lat : 23.7948619,	// Provide your latitude
			lng : 90.4122873, // Provide your longitude
			content: '<p>NorthUI, Gulshan 2, Dhaka, Bangladesh</p>', // Provide your address to show on pop up
			icon: 'img/icon-location.svg',
			zoom : 16,
			panBy : { x: 0, y: -40 }
		};

		window.map = new GMaps({
			div: mapWrapperID,
			lat : mapOps.lat,
			lng : mapOps.lng,
			scrollwheel: false,
			draggable: draggableOp,
			zoom: mapOps.zoom,
			disableDefaultUI: true,
			styles : mapStyle
		});


		map.addMarker({
			lat : mapOps.lat,
			lng : mapOps.lng,
			icon: mapOps.icon,
			infoWindow: {
				content: mapOps.content
			}
		});

		map.panBy(mapOps.panBy.x, mapOps.panBy.y);
	}
	
	jQuery(function($) {
    "use strict";
	/*==========  ONEPAGE NAV  ==========*/
	 if ($('.main-nav').length > 0) {
	  $('.main-nav, .mobile-nav').onePageNav({
	   currentClass: 'active',
	   changeHash: false,
	   scrollSpeed: 1500,
	   easing: "easeInOutExpo",
	   filter: ':not(.dropdown-items>li>a)'
	  });
	 }
	 
	});

	//For local scroll
	if ($('.next-section').length > 0) {
		$('.next-section').on('click', function(event){
			event.preventDefault();
			var hash = $(this).prop('hash');
			var $this = $(this);
			if(hash) {
				$('html, body').stop().animate({
					scrollTop: $($this.attr('href')).offset().top
				}, 900);
			}
		});
	}
	
	
	
	
	
	/* ======= SHUFFLE JS (FILTERABLE PORTFOLIO) ======= */
	$(window).on('load', function () {

		$('.upcoming-events').each(function(i, e){

			var ttGrid = $(this).find('.upcoming-events-tab-contents');
			var self = this;
			ttGrid.shuffle({
                    itemSelector: '.single' // the selector for the items in the grid
                });

			/* reshuffle when user clicks button filter item */
			$(this).find('.item-filter li').on('click',function (e) {
				e.preventDefault();

                    // set active class
                    $(self).find('.item-filter li').removeClass('active');
                    $(this).addClass('active');

                    // get group name from clicked item
                    var ttGroupName = $(this).attr('data-group');

                    // reshuffle grid
                    ttGrid.shuffle('shuffle', ttGroupName);
                });

		});

	});
	
	//Team Slider
	if ($('.testimonials').length > 0) {
		$(".testimonials").owlCarousel({
			margin: 30,
			loop: true,
      		nav: true,
			dots: false,
			navText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
			],
			responsive:{
				0:{
					items: 1
				},
				480:{
					items:2
				},
				992:{
					items:3
				},
				1366:{
					items:3
				}
			}
		});
	}
	
	
	/*==========  CONTACT FORM  ==========*/
	if ($('#contactForm').length > 0) {
  		$("#contactForm").validator().on("submit", function (event) {
		    if (event.isDefaultPrevented()) {
		        // handle the invalid form...
		        formError();
		    } else {
		        // everything looks good!
		        event.preventDefault();
		        submitForm();
		    }
		});


		function submitForm(){
		    // Initiate Variables With Form Content
		    var name = $("#name").val();
		    var email = $("#email").val();
		    var subject = $("#subject").val();
		    var message = $("#message").val();

		    $.ajax({
		        type: "POST",
		        url: "php/form-process.php",
		        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
		        success : function(text){
		            if (text == "success"){
		                formSuccess();
		            } else {
		                formError();
		                submitMSG(false,text);
		            }
		        }
		    });
		}

		function formSuccess(){
		    $("#contactForm")[0].reset();
		    submitMSG(true, "Message Submitted!");
			$('.help-block').hide();
		}

		function formError(){
		    $("#form-submit-wrapper").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		        $(this).removeClass();
		    });
			
			$('.help-block').text('Any field can\'t be blank!');
		}

		function submitMSG(valid, msg){
		    if(valid){
		        var msgClasses = "h3 text-center fadeIn animated text-success";
		    } else {
		        var msgClasses = "h3 text-center text-danger";
		    }
		    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
  	}
