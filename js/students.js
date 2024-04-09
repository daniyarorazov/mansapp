function cropImageWhenMinimizeWindow() {
    var windowWidth = $(window).width();
    if (windowWidth < 1265) {
       $('img[alt="header-img"]').attr('src', '../img/header-image-students-cropped.png')
    } else {
         $('img[alt="header-img"]').attr('src', '../img/header-image-students.png')
     }
}

$(window).resize(function() {
    cropImageWhenMinimizeWindow();
  
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const htmlElement = document.documentElement; // Получаем <html> элемент
const html = document.querySelector("html");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  html.style.overflow = html.style.overflow === "hidden" ? "" : "hidden";
}

var swiper = new Swiper(".sliderPartner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    slidesPerView: 3,
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
      },
  });

