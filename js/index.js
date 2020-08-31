AOS.init();

    $(document).ready(function(){
      $('.team').slick({
        infinite: true,
  		slidesToShow: 3,
  		speed: 1000,
  		slidesToScroll: 1,
  		arrows:false,
  		autoplay:true,
  		autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          }
        }
      ]
      });
    });

    