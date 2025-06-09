const rueda = document.getElementById("rueda");
let angle = 0;
let rotating = false;
let animationFrame;

function girar() {
    angle = (angle - 0.5); // Rota 1 grado por frame aproximadamente
    rueda.style.transform = `rotate(${angle}deg)`;
    animationFrame = requestAnimationFrame(girar);
}

rueda.addEventListener("mouseenter", () => {
    if (!rotating) {
    rotating = true;
    animationFrame = requestAnimationFrame(girar);
    }
});

rueda.addEventListener("mouseleave", () => {
    rotating = false;
    cancelAnimationFrame(animationFrame);
});

const seccionesEtapas = document.querySelectorAll('.section-etapas');
const contenidosEtapas = document.querySelectorAll('.contenido');

seccionesEtapas.forEach(seccion => {
    seccion.addEventListener('click', () => {
        const etapa = seccion.getAttribute('data-etapa');

        // Oculta todos los contenidos
        contenidosEtapas.forEach(contenido => {
            contenido.classList.remove('activo');
        });

        // Muestra el contenido correspondiente
        const contenidoActivo = document.getElementById(`contenido${etapa}`);
        contenidoActivo.classList.add('activo');
    });
});