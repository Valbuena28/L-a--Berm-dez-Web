
    document.addEventListener("DOMContentLoaded", () => {
        const event = JSON.parse(localStorage.getItem("selectedEvent"));

        if (event) {
            document.querySelector('.img img').src = event.image;
            document.querySelector('.title').textContent = event.title;
            document.querySelectorAll('.info')[0].textContent = `Tipo de Evento: ${event.tipe}`;
            document.querySelectorAll('.info')[1].textContent = `Fecha: ${event.date}`;
            document.querySelectorAll('.info')[2].textContent = `Lugar: ${event.place}`;
            document.querySelectorAll('.info')[3].textContent = `Hora: ${event.duration}`;
            document.querySelector('p').textContent = `Descripción: ${event.description}`;
        } else {
            document.querySelector('.text').innerHTML = "<p>No se encontró la información del evento.</p>";
        }
    });


