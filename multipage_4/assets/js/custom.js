/*global jQuery */
/* Contents
// ------------------------------------------------>
1.  WHOLE SCRIPT STRICT MODE SYNTAX
2.  OUR PROJECTS
3.  SMARTMENU
4.  SMARTMENUS MOBILE MENU TOGGLE BUTTON
5.  OUR TEAM SLIDER
6.  PARTNERS SLIDER
7.  WHAT WE DO SLIDER
8.  BLOG SLIDER
9.  SERVICES SLIDER
10. TESTIMONIALS SLIDER
11. SCROLL TO TOP BUTTON
12. HEADER STICKY
13. GOOGLE MAP
14. LOADING SCREEEN
15. HEADER SEARCH ICON
16. WEBSITE ANIMACTION
17. LOADING SCREEN
18. CONTACT FORM
19. COUNTER WIDGETS 
*/
(function($) {

  /*----------------- WHOLE SCRIPT STRICT MODE SYNTAX -----------------*/
  "use strict";
  
  /*----------------- OUR PROJECTS -----------------*/
  var $container = $('.portfolio-container');
  $container.isotope({
    filter: '*',
    masonry: {
      horizontalOrder: true
    },
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
  
  $('.portfolio-filter a').on('click', function() {
    $('.portfolio-filter .current').removeClass('current');
    $(this).addClass('current');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      percentPosition: true,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
  
  /*--------------- SMARTMENU ---------------*/
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    mainMenuSubOffsetY: 4,
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -6
  });
  
  /*--------------- SMARTMENUS MOBILE MENU TOGGLE BUTTON ---------------*/
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.on('change', function() {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() {
          $menu.css('display', '');
        });
      } else {
        $menu.show().slideUp(250, function() {
          $menu.css('display', '');
        });
      }
    });
    // hide mobile menu beforeunload
    $(window).on('bind', 'beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
  
  /* ------------------ OUR TEAM SLIDER ----------------*/
  /*var our_team_slider = $(".our_team_slider");
  owc_slider(our_team_slider, 4 , 2 , 1, 20, true );
  
  /*--------------- PARTNERS SLIDER ---------------*/
  /*var partners_slider = $(".partners_slider");
  owc_slider(partners_slider, 5 , 3 , 1, 0, false );
  
  /*--------------- WHAT WE DO SLIDER ---------------*/
  /*var what_we_do_slider = $(".what_we_do_slider");
  owc_slider(what_we_do_slider, 3 , 2 , 1, 0, true );
  
  /*--------------- BLOG SLIDER ---------------*/
  /*var latest_news_slider = $(".latest_news_slider");
  owc_slider(latest_news_slider, 3 , 2 , 1, 0, true );
  
  /*--------------- TESTIMONIALS SLIDER ---------------*/
  /*var testimonials_slider = $(".testimonials_slider");
  owc_slider(testimonials_slider, 2 , 2 , 1, 20, true );
  
  /*------------------- SLIDER FUNCTION ----------------------*/
  /*function owc_slider(slider_object,desktop,tablate,mobile,margin,dots){
    slider_object.owlCarousel({
      loop: true,
      margin: margin,
      autoplayTimeout: 5000,
      smartSpeed: 450,
      dots: dots,
      nav: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
        0: {
          items: mobile
        },
        600: {
          items: tablate
        },
        1000: {
          items: desktop
        }
      }
    })
  }
  
  /* ------------------ SCROLL TO TOP BUTTON -----------------*/
  var scrollToTop = document.querySelector(".scrollToTop");
  scrollToTop.addEventListener('click', function(e) {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  var last_known_scroll_position = 0;
  var scrollToTop = document.querySelector(".scrollToTop");
  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if(last_known_scroll_position > 100)
    {
      scrollToTop.classList.add("fadeInScroll");
      scrollToTop.classList.remove("fadeOutScroll");
    }
    else
    {
      scrollToTop.classList.remove("fadeInScroll");
      scrollToTop.classList.add("fadeOutScroll");
    }
  });
  
  /* ------------------ HEADER STICKY -----------------*/
  var last_known_scroll_position = 0;
  var navigation = document.querySelector("header");
  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if(last_known_scroll_position > 50)
    {
      navigation.classList.add("sticky");
    }
    else
    {
      navigation.classList.remove("sticky");
    }
  });

  
  /* ------------------ GOOGLE MAP  -----------------*/
  // if HTML DOM Element that contains the map is found...
  if (document.getElementById('map-canvas')){
    var latLng = new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
    markerIcon = {
      url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      scaledSize: new google.maps.Size(60, 60),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20,40)
    };
    var mapOptions = {
      zoom: 16,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: markerIcon
    });
  }
  
  /* ------------------ LOADING SCREEEN -----------------*/
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 0);
  
  /* ------------------ HEADER SEARCH ICON ----------------- */
  $('.search-option').hide();
  $(".main-search").on('click', function() {
    $('.search-option').animate({
      height: 'toggle',
    });
  });
  
  /* ------------------ COUNTER WIDGETS ----------------- */
  var $myDiv = $('#counter');
  if ($myDiv.length) {
    $(window).on('scroll', function() {
      var a = 0;
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        });
        a = 1;
      }
    });
  }

  $(window).on('resize',function(){
    if ($(window).width() > 991) {
      location.reload();
    }
  });
  
}(jQuery));

  /* ------------------ ACCORDION -----------------*/

var action = 'click';
var speed = "500";

$(document).ready(function() {
  // Question handler
  $('li.q').on(action,function () {
    // Get next element
      $(this).next()
        .slideToggle(speed)
        .siblings('li.a')
        .slideUp();
    // Get arrow for active question
    var arrow = $(this).children('.fa');
    // Remove the 'rotate' class for all images except the active.
    $('.fa').not(arrow).removeClass('rotate');
    // Toggle rotate class
    arrow.toggleClass('rotate');
  });
});

/*---------------Contact_Form--------------*/

$('#contact_form').submit(function() {
      var form = $(this);
      var formData = $(this).serialize();
     
      $.post('../mail.php', formData, function(data) {
        //form.find('.send_mes').val('');
        form.append('<div class="success-msg" style="color:#000; font-weight:bold;">Mail Sent.</div>');
      }).fail(function() {
        //form.find('.required-field').val('');
        form.append('<div class="error-msg" style="color:#000; font-weight:bold;">Error occurred.</div>');
      });

      return false;

  });

/*--------------- slider ---------------*/
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
//Carousels
function carousels(){
  var carousel = $('.carouselslider'),
      options  = {
        itemsCustom : [
          [0, 1],
          [768, 2],
          [992, 3]
        ],
        navigation  : true
      };
  
  carousel.each(function(){
    var $this = $(this);

    if ($this.data('options')){
      options = $this.data('options');
    }

    $this.owlCarousel(options).addClass('loaded');
    
    $(window).on('resize', function(){
      delay(function(){
        bottomNavigation();
      }, 200);
    });

    function bottomNavigation(){
      if (
        ($this.hasClass('bottom-navigation')) && (!$this.find('.owl-pagination .owl-prev').length)
      ){
        $this.find('.owl-pagination').prepend('<a href="#" class="owl-prev"/>');
        $this.find('.owl-pagination').append('<a href="#" class="owl-next"/>');
        
        $this.find('.owl-next').on('click',function (e){
          e.preventDefault();
          
          $this.trigger('owl.next');
        });
        
        $this.find('.owl-prev').on('click',function (e){
          e.preventDefault();
          
          $this.trigger('owl.prev');
        });
      }
    }
    bottomNavigation();
  });
}
carousels();