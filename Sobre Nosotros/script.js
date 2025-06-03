document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-250px';
});

// Toggle submenús
const toggles = document.querySelectorAll('.toggle-submenu');
toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});


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

