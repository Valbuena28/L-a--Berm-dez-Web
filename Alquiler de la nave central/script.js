(function() {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID

    const reservedDates = [
        "2024-06-10",
        "2024-06-15",
        "2024-06-20"
    ]; // Sample reserved dates, replace with real data as needed

    const dateInput = document.getElementById('date');
    const form = document.getElementById('reservation-form');
    const formMessage = document.getElementById('form-message');

    // Disable reserved dates in the date picker and mark them in red
    dateInput.addEventListener('input', () => {
        const selectedDate = dateInput.value;
        if (reservedDates.includes(selectedDate)) {
            formMessage.textContent = "Lo sentimos, esa fecha ya está reservada.";
            formMessage.style.color = "#ff4d4d"; // Red color for error
        } else {
            formMessage.textContent = "";
        }
    });

    // On form submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const date = form.date.value;

        if (!name || !email || !date) {
            formMessage.textContent = "Por favor, complete todos los campos.";
            formMessage.style.color = "#ff4d4d";
            return;
        }

        if (reservedDates.includes(date)) {
            formMessage.textContent = "Lo sentimos, esa fecha ya está reservada.";
            formMessage.style.color = "#ff4d4d";
            return;
        }

        // Prepare email params
        const templateParams = {
            from_name: name,
            from_email: email,
            reservation_date: date
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                formMessage.textContent = "Reservación exitosa. ¡Gracias!";
                formMessage.style.color = "#ffeb3b";
                form.reset();
                // Optionally add the reserved date to the list to prevent double booking
                reservedDates.push(date);
            }, function(error) {
                formMessage.textContent = "Error al enviar la reservación. Intente nuevamente.";
                formMessage.style.color = "#ff4d4d";
            });
    });
    
   
})();



(function() {
    const carousel = document.getElementById('escenario-carousel');
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.carousel-arrow.left');
    const nextBtn = carousel.querySelector('.carousel-arrow.right');
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        imagesContainer.style.transform = `translateX(${offset}%)`;
        indicators.forEach((btn, idx) => {
            btn.classList.toggle('active', idx === currentIndex);
        });
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    indicators.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            currentIndex = idx;
            updateCarousel();
        });
    });

    // Optional: Auto slide every 5 seconds
    // setInterval(showNext, 5000);

    updateCarousel();
})();

document.addEventListener("DOMContentLoaded", function() {
    // Add fade-in class on page load
    document.body.classList.add("fade-in");

    // Attach click event to all internal links for fade-out effect
    const links = document.querySelectorAll('a[href^]:not([target="_blank"])');
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const href = link.getAttribute("href");
            // Only apply fade-out for same origin and non-hash links
            if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
                event.preventDefault();
                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match transition duration in CSS
            }
        });
    });
});