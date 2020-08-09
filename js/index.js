AOS.init();

    $(document).ready(function(){
      $('.team').slick({
        infinite: true,
  		slidesToShow: 3,
  		speed: 1000,
  		slidesToScroll: 1,
  		arrows:false,
  		autoplay:true,
  		autoplaySpeed: 5000
      });
    });

    