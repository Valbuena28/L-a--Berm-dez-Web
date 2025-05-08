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

        const calendarGrid = document.getElementById('calendarGrid');
        const monthYear = document.getElementById('monthYear');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const eventList = document.getElementById('eventList');
        const eventDetails = document.getElementById('eventDetails');
        const eventTitle = document.getElementById('eventTitle');
        const eventInfo = document.getElementById('eventInfo');
        const eventImage = document.getElementById('eventImage');
        const verMasBtn = document.getElementById('verMasBtn');

        let currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth(); // 0-based month index
        const nextMonth = (currentMonth + 1) % 12;
        const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;

        // Updated events data with duration and place
        const events = [
            {
                id: 1,
                title: 'Concierto de Jazz',
                date: new Date(currentYear, currentMonth, 5).toISOString().split('T')[0],
                description: 'Una noche mágica con los mejores músicos de jazz.',
                duration: '2 horas',
                place: 'Auditorio Principal',
                image: 'imagenes/1.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 2,
                title: 'Exposición de Arte Moderno',
                date: new Date(currentYear, currentMonth, 12).toISOString().split('T')[0],
                description: 'Explora las últimas tendencias en arte contemporáneo.',
                duration: 'Todo el día',
                place: 'Galería de Arte',
                image: 'imagenes/2.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 3,
                title: 'Festival de Danza',
                date: new Date(currentYear, currentMonth, 18).toISOString().split('T')[0],
                description: 'Celebración de la danza tradicional y contemporánea.',
                duration: '3 horas',
                place: 'Teatro Principal',
                image: 'imagenes/3.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 4,
                title: 'Obra de Teatro Clásico',
                date: new Date(currentYear, currentMonth, 25).toISOString().split('T')[0],
                description: 'Revive los grandes clásicos del teatro mundial.',
                duration: '2 horas',
                place: 'Sala de Teatro',
                image: 'imagenes/4.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 5,
                title: 'Conferencia de Arte',
                date: new Date(nextMonthYear, nextMonth, 3).toISOString().split('T')[0],
                description: 'Charlas y debates con expertos en arte.',
                duration: '1.5 horas',
                place: 'Sala de Conferencias',
                image: 'imagenes/5.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 6,
                title: 'Taller de Escultura',
                date: new Date(nextMonthYear, nextMonth, 10).toISOString().split('T')[0],
                description: 'Aprende técnicas de escultura con profesionales.',
                duration: '4 horas',
                place: 'Taller de Arte',
                image: 'imagenes/6.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 7,
                title: 'Concierto de Música Clásica',
                date: new Date(nextMonthYear, nextMonth, 15).toISOString().split('T')[0],
                description: 'Disfruta de las mejores piezas clásicas interpretadas en vivo.',
                duration: '2 horas',
                place: 'Auditorio Principal',
                image: 'imagenes/7.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 8,
                title: 'Exposición Fotográfica',
                date: new Date(nextMonthYear, nextMonth, 20).toISOString().split('T')[0],
                description: 'Imágenes que capturan la esencia de la ciudad.',
                duration: 'Todo el día',
                place: 'Galería de Arte',
                image: 'imagenes/8.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 9,
                title: 'Festival de Cine',
                date: new Date(nextMonthYear, nextMonth, 25).toISOString().split('T')[0],
                description: 'Proyecciones de películas independientes y clásicas.',
                duration: '5 horas',
                place: 'Sala de Cine',
                image: 'imagenes/9.jpg',
                moreInfoUrl: '#'
            },
            {
                id: 10,
                title: 'Concierto de Rock',
                date: new Date(nextMonthYear, nextMonth, 28).toISOString().split('T')[0],
                description: 'Una noche de rock con bandas locales.',
                duration: '3 horas',
                place: 'Escenario Exterior',
                image: 'imagenes/10.jpg',
                moreInfoUrl: '#'
            }
        ];

        function renderCalendar(date) {
            calendarGrid.innerHTML = '';
            const year = date.getFullYear();
            const month = date.getMonth();

            monthYear.textContent = date.toLocaleString('es-ES', { month: 'long', year: 'numeric' });

            // Instead of days of week and day numbers, show only event boxes for the month
            const filteredEvents = events.filter(ev => {
                const evDate = new Date(ev.date);
                return evDate.getFullYear() === year && evDate.getMonth() === month;
            });

            if (filteredEvents.length === 0) {
                const noEvents = document.createElement('p');
                noEvents.textContent = 'No hay eventos para este mes.';
                calendarGrid.appendChild(noEvents);
                return;
            }

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
                dateElem.textContent = ev.date;
                dateElem.style.margin = '4px 0 0 0';
                dateElem.style.fontSize = '0.9rem';
                dateElem.style.color = '#ccc';
                eventBox.appendChild(dateElem);

                eventBox.addEventListener('click', () => {
                    showEventDetails(ev);
                });

                calendarGrid.appendChild(eventBox);
            });
        }

        function renderEventList(year, month) {
            // Clear previous events except title
            eventList.querySelectorAll('.event-item').forEach(e => e.remove());

            const filteredEvents = events.filter(ev => {
                const evDate = new Date(ev.date);
                return evDate.getFullYear() === year && evDate.getMonth() === month;
            });

            if (filteredEvents.length === 0) {
                const noEvents = document.createElement('p');
                noEvents.textContent = 'No hay eventos para este mes.';
                eventList.appendChild(noEvents);
                return;
            }

            filteredEvents.forEach(ev => {
                const evItem = document.createElement('div');
                evItem.classList.add('event-item');
                evItem.textContent = `${ev.date} - ${ev.title}`;
                evItem.addEventListener('click', () => {
                    showEventDetails(ev);
                });
                eventList.appendChild(evItem);
            });
        }

        function showEventDetails(event) {
            eventTitle.textContent = event.title;
            eventImage.src = event.image;
            eventImage.alt = event.title;
            eventInfo.innerHTML = `
                <p><strong>Fecha:</strong> ${event.date}</p>
                <p><strong>Descripción:</strong> ${event.description}</p>
                <p><strong>Duración:</strong> ${event.duration}</p>
                <p><strong>Lugar:</strong> ${event.place}</p>
            `;
            verMasBtn.onclick = () => {
                window.location.href = 'Eventos y Actividades.html';
            };
            eventDetails.style.display = 'block';
            eventList.style.display = 'none';
            calendarGrid.style.display = 'none';
        }

        // Remove close button event listener since button is removed

        // Close event details when mouse leaves the event details section
        eventDetails.addEventListener('mouseleave', () => {
            eventDetails.style.display = 'none';
            eventList.style.display = 'block';
            calendarGrid.style.display = 'grid';
        });

        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });

        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });

        renderCalendar(currentDate);

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

/**CODIGO DE LA PAGINA ALQUILER DE LA NAVE CENTRAL**/
      

/**FIN DEL CODIGO DE LA PAGINA ALQUILER DE LA NAVE CENTRAL**/






