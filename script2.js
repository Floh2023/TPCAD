function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


/**  Carrousel Productos* */

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".custom-slider-list");
    const slides = document.querySelectorAll(".custom-slider-item");
    const prevButton = document.querySelector(".custom-slider-prev");
    const nextButton = document.querySelector(".custom-slider-next");

    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos
});
