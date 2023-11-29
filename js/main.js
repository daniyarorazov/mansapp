function cropImageWhenMinimizeWindow() {
    var windowWidth = $(window).width();
    if (windowWidth < 1265) {
       $('img[alt="header-img"]').attr('src', '../img/header-image-cropped.png')
    } else {
         $('img[alt="header-img"]').attr('src', '../img/header-image.png')
     }
}

$(window).resize(function() {
    cropImageWhenMinimizeWindow();
  
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const htmlElement = document.documentElement; // Получаем <html> элемент

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

   
}

var swiper = new Swiper(".sliderPartner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        901: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1124: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
      },
  });

