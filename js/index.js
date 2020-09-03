const openNavLink = document.getElementById('open-nav-link');
const nav = document.getElementById('navbar');


openNavLink.addEventListener('click', openNav);


//Open Nav on mobile
function openNav() {
  console.log('Hamburger Woking');

  if (nav.style.display != 'none') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
    console.log('else working');
  }
}


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

    