const hideCarousel = setTimeout(()=> {
    var carousel = document.getElementsByClassName("front-page-carousel") 
    if (carousel.length == 0) {
        hideCarousel();
    }
    carousel[0].style.display = "none"
}, 600);

document.addEventListener('DOMContentLoaded', hideCarousel());
