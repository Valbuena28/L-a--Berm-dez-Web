        // JavaScript for automatic slideshow carousel with dots navigation
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('#slideshow .slide');
            const dotsContainer = document.getElementById('dots');
            let currentIndex = 0;
            const totalSlides = slides.length;
            const intervalTime = 4000; // 4 seconds
            let intervalId;

            // Create dots dynamically
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    clearInterval(intervalId);
                    showSlide(i);
                    currentIndex = i;
                    startInterval();
                });
                dotsContainer.appendChild(dot);
            }
            const dots = dotsContainer.querySelectorAll('.dot');

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                    dots[i].classList.toggle('active', i === index);
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                showSlide(currentIndex);
            }

            function startInterval() {
                intervalId = setInterval(nextSlide, intervalTime);
            }

            startInterval();
        });
     /** Calendario de Eventos **/
const calendarGrid = document.getElementById('calendarGrid');
const monthYear = document.getElementById('monthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

// 🔹 Siempre comenzamos el calendario con el día 1 del mes actual
let currentDate = new Date();
currentDate.setDate(1);

let events = [];

// 🔹 Obtener eventos desde la base de datos
function fetchEventsFromDatabase() {
    fetch('getEventos.php') // Asegúrate de que esta ruta sea correcta en tu servidor
        .then(response => response.json())
        .then(data => {
            events = data.map(ev => ({
                id: ev.id,
                title: ev.title,
                date: ev.date,
                tipe: ev.tipe,
                description: ev.description,
                duration: ev.duration,
                place: ev.place,
                image: ev.image,
            }));
            renderCalendar(currentDate); // Solo renderiza cuando ya cargaron los eventos
        })
        .catch(error => {
            console.error('Error al cargar los eventos:', error);
            calendarGrid.innerHTML = '<p>Error al cargar los eventos.</p>';
        });
}

// 🔹 Mostrar calendario del mes actual
function renderCalendar(date) {
    calendarGrid.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();

    // Mostrar el mes y año en texto
    monthYear.textContent = date.toLocaleString('es-ES', { month: 'long', year: 'numeric' });

    // Filtrar los eventos del mes actual
    const filteredEvents = events.filter(ev => {
        const evDate = new Date(ev.date);
        return evDate.getFullYear() === year && evDate.getMonth() === month;
    });

    // Si no hay eventos
    if (filteredEvents.length === 0) {
        const noEvents = document.createElement('p');
        noEvents.textContent = 'No hay eventos para este mes.';
        calendarGrid.appendChild(noEvents);
        return;
    }

    // Mostrar cada evento
    filteredEvents.forEach(ev => {
        const eventBox = document.createElement('div');
        eventBox.classList.add('event-box');

        const img = document.createElement('img');
        img.src = ev.image;
        img.alt = ev.title;
        eventBox.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = ev.title;
        eventBox.appendChild(title);

        const dateElem = document.createElement('p');
        dateElem.textContent = `Fecha: ${ev.date}`;
        eventBox.appendChild(dateElem);

        const tipeElem = document.createElement('p');
        tipeElem.textContent = `Tipo de evento: ${ev.tipe}`;
        eventBox.appendChild(tipeElem);

        const durationElem = document.createElement('p');
        durationElem.textContent = `Duración: ${ev.duration}`;
        eventBox.appendChild(durationElem);

        const placeElem = document.createElement('p');
        placeElem.textContent = `Lugar: ${ev.place}`;
        eventBox.appendChild(placeElem);

        const verMasBtn = document.createElement('button');
        verMasBtn.classList.add('ver-mas-btn');
        verMasBtn.textContent = 'Ver más';
        verMasBtn.onclick = () => {
            localStorage.setItem('selectedEvent', JSON.stringify(ev));
            window.location.href = "Eventos y actividades/Eventos y Actividades.html";
        };
        eventBox.appendChild(verMasBtn);

        calendarGrid.appendChild(eventBox);
    });
}

// 🔹 Navegación entre meses
prevMonthBtn.addEventListener('click', () => {
    // Crear nuevo objeto Date sin modificar currentDate directamente
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    currentDate = newDate;
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    currentDate = newDate;
    renderCalendar(currentDate);
});

// 🔹 Inicializar calendario
fetchEventsFromDatabase();


        /**Fin del calendario de eventos**/

        (function() {
            const scrollTopBtn = document.getElementById('scrollTopBtn');
    
            // Función para mostrar u ocultar el botón según el scroll
            function toggleScrollButton() {
                if (window.scrollY > 100) {
                    scrollTopBtn.style.display = 'flex';
                } else {
                    scrollTopBtn.style.display = 'none';
                }
            }
    
            // Evento scroll para mostrar/ocultar botón
            window.addEventListener('scroll', toggleScrollButton);
    
            // Evento click para hacer scroll suave hacia arriba
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    
            // Inicializar estado del botón
            toggleScrollButton();
        })();

/**Menu hamburguesa**/
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

document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.querySelector(".arrow");
    const calendarioAnual = document.querySelector(".annual_calendar_grip");
    const tituloMes = document.querySelector(".month h2");

    arrow.addEventListener("click", function() {
        arrow.classList.toggle("up");
        calendarioAnual.classList.toggle("activo");
        tituloMes.classList.toggle("subrayado");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector(".carousel-slide");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function moveToNextSlide() {
        index = (index + 1) % items.length;
        slide.style.transform = `translateX(-${index * 100}%)`;
    }

    // Cambiar cada 4 segundos
    setInterval(moveToNextSlide, 4000);
});

/**nOTICIAS**/


  let currentIndex = 0;
  const slidesWrapper = document.querySelector(".slides-wrapper");
  const totalSlides = document.querySelectorAll(".container_all").length;

  function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }








