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

