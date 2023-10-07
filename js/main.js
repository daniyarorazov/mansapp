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

