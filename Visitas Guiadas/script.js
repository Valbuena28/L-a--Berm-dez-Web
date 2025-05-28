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

/**Carousel de visitas guiadas**/

  
    let currentIndex = 0;

    function updateSlidePosition() {
        const container = document.querySelector('.carousel-container');
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    // Inicializar
    document.addEventListener("DOMContentLoaded", () => {
        updateSlidePosition();
    });



