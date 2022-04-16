$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var middle_of_object = $(this).position().top + $(this).outerHeight()/2;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > middle_of_object ){
              
              $(this).animate({'opacity':'1'},500);

              if ($(this).hasClass('counter')) {
                counter();
              }

          }
          
          
      }); 
  
  });
  
});

// IIFE with jQuery Wrapper
(function ($) {
  'use strict';


  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


  // testimonial slider
  $('.testimonial-slider').slick({
    arrows: false,
    dots: false
  });


  $('.blog-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });



  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
  $(document).ready(function () {

    // Add Class in scrolling
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      //console.log(scroll);
      if (scroll > 200) {
        //console.log('a');
        $('.navigation').addClass('sticky-header');
      } else {
        //console.log('a');
        $('.navigation').removeClass('sticky-header');
      }
    });


    // mouse hover effect
    // filter
    $(document).ready(function () {
      var containerEl = document.querySelector('.filtr-container');
      var filterizd;
      if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
      }
      //Active changer
      $('.filter').on('click', function () {
        $('.filter').removeClass('active');
        $(this).addClass('active');
      });
    });

    /* Popup Video */
    $('#th-video').magnificPopup({
      items: [{
        src: 'video/ocean.mp4',
        type: 'iframe' // this overrides default type
      }],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
    });

    /* Popup Image */
    $('.image-link').magnificPopup({
      type: 'image'
    });

    // DOM Content Load Event Actions;
    $(window).load(function () {
      $('div.loading').remove();
      $('body').removeClass('loading');
    });

  }); // DOM Ready

}(jQuery)); // IIFE

function counter() {
  $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}