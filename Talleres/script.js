
document.addEventListener('DOMContentLoaded', function() {
    const imagen = document.querySelector('.taller-arte-img');
    const info = document.querySelector('.objetivo-text');

    if (imagen && info) {
        imagen.addEventListener('mouseenter', function() {
            info.style.display = 'block';
        });
        imagen.addEventListener('mouseleave', function() {
            info.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos que se deslizan desde la izquierda
    const slidersLeft = document.querySelectorAll('.slide-in-left');
    // Selecciona todos los elementos que se deslizan desde la derecha
    const slidersRight = document.querySelectorAll('.slide-in-right');

    // Opciones para el IntersectionObserver
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    // Crea un IntersectionObserver para observar la aparición de los elementos
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' cuando el elemento está visible
                entry.target.classList.add('visible');
            } else {
                // Remueve la clase 'visible' cuando el elemento no está visible
                entry.target.classList.remove('visible');
            }
        });
    }, appearOptions);

    // Observa cada elemento que se desliza desde la izquierda
    slidersLeft.forEach(slider => {
        appearOnScroll.observe(slider);
    });
    // Observa cada elemento que se desliza desde la derecha
    slidersRight.forEach(slider => {
        appearOnScroll.observe(slider);
    });
});
