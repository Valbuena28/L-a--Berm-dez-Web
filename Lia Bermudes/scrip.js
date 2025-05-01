const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let counter = 0;
const slideWidth = images[0].clientWidth; // Ancho de una imagen 

function nextSlide() {
    counter++;
    if (counter === images.length) {
        counter = 0; // Volver al inicio al llegar al final
    }
    slides.style.transform = `translateX(-${slideWidth * counter}px)`;
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos (ajusta el valor en milisegundos)

// Para que la transición sea fluida al volver al inicio:
slides.addEventListener('transitionend', () => {
    if (counter === 0) {
        slides.style.transitionDuration = '0s';
        slides.style.transform = `translateX(0px)`;
        // Forzar un reflow para que la transición se aplique correctamente la próxima vez
        slides.offsetWidth;
        slides.style.transitionDuration = '0.5s';
    }
});