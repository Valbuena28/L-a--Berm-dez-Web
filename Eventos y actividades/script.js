document.addEventListener('DOMContentLoaded', () => {
    const event = JSON.parse(localStorage.getItem('selectedEvent'));

    if (event) {
        document.querySelector('.img img').src = '../' + event.image;
        document.querySelector('.img img').alt = event.title;

        document.querySelector('.title').textContent = event.title;
        document.querySelectorAll('.info')[0].textContent = `Fecha: ${event.date}`;
        document.querySelectorAll('.info')[1].textContent = `Lugar: ${event.place}`;
        document.querySelectorAll('.info')[2].textContent = `Hora: ${event.duration}`;
        
        const extendedDescriptions = {
            'Taller de arte y creatividad': "A cargo del artista Gerardo Cárdenas, el cual tiene como finalidad desarrollar la confianza a través del arte como herramienta, asimismo es una dinámica para promover el pensamiento creativo con el objetivo de generar nuevas ideas alrededor de un reto y desarrollar una propuesta que aporte seguridad en sí mismo.<br><br>" + 
            "Los participantes se animan a explorar y probar cosas nuevas, que les permita llegar a conclusiones a través de la música, teatro, y las artes visuales.<br><br>" + 
            "Materiales que deben traer los participantes: Lápiz, papel y creyones para iniciar.",
            'Capitan Avispa': `Te invitamos a disfrutar de esta emocionante pelicula, este viernes a su #ViernesDePelicula con la proyección del film CAPITÁN AVISPA. ✨
🫂El público infantil y todas las familias de Maracaibo que asistan a nuestra Sala Audiovisual disfrutarán esta obra de animación dominicana de 2024 escrita y producida por el cantante Juan Luis Guerra. 💫
🎬 La historia se desarrolla en Avispatropolis y el Reino de la Miel protegidos por el gran CAPITÁN AVISPA, pero su archi-enemigo el Avispón Jaques Poison y sus secuaces planean acabar con esa paz y apoderarse de ambas colonias. Está en las manos del valiente CAPITÁN AVISPA defender a los suyos a toda costa, como siempre, con nobleza, justicia e inocencia.
🎥 La película CAPITÁN AVISPA luego de su exhibición en 33 paises y estreno en República Dominicana llega a Maracaibo con más de 40 canciones de Juan Luis Guerra y personajes que cuentan con las voces de Luis Fonsi (Capitán Avispa), Juanes (Sargento Picadura) y Joy Huerta (Princesa Honey Bee). 🌟
👉🏼Asiste a la proyección de la exitosa película de 2024, CAPITÁN AVISPA, de los directores Jean Gabriel Guerra y Jonathan Meléndez.`,
            'Festival de Danza': 'Celebración de la danza tradicional y contemporánea. Participan grupos de distintas regiones del país, con presentaciones de ballet, danza moderna y ritmos folklóricos, acompañados de música en vivo y coloridos vestuarios.',
            'Obra de Teatro Clásico': 'Revive los grandes clásicos del teatro mundial en una interpretación moderna pero fiel a los textos originales. El elenco está compuesto por actores galardonados y escenografía diseñada por artistas visuales reconocidos.',
            'Conferencia de Arte': 'Charlas y debates con expertos en arte. Se abordarán temas como el impacto cultural del arte en la sociedad, el rol del artista moderno, y las nuevas formas de expresión visual.',
            'Taller de Escultura': 'Aprende técnicas de escultura con profesionales en un ambiente colaborativo. Se trabajará con arcilla, piedra y materiales reciclados para crear obras inspiradas en la naturaleza y la forma humana.',
            'Concierto de Música Clásica': 'Disfruta de las mejores piezas clásicas interpretadas en vivo por una orquesta sinfónica. El programa incluye obras de Mozart, Beethoven y Tchaikovsky, en una experiencia envolvente.',
            'Exposición Fotográfica': 'Imágenes que capturan la esencia de la ciudad a través de la lente de fotógrafos urbanos. La exposición incluye retratos, paisajes urbanos y vida cotidiana desde distintas perspectivas.',
            'Festival de Cine': 'Proyecciones de películas independientes y clásicas en un ambiente al aire libre con debates posteriores con directores y críticos. Se premiarán las mejores producciones del festival.',
            'Concierto de Rock': 'Una noche de rock con bandas locales emergentes y algunas sorpresas especiales. Sonido envolvente, luces y toda la energía de la música en vivo para cerrar el mes con fuerza.'
        };

        const extendedText = extendedDescriptions[event.title] || event.description;
        document.querySelector('.text p').innerHTML = extendedText; // Usa innerHTML para renderizar las etiquetas <br>
    } else {
        document.querySelector('.text').innerHTML = '<p>No se encontró información del evento.</p>';
    }
});
