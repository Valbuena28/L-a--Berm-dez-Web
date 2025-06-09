/* Esta parte del codigo es la configuracion de los botones y los contenidos de las cajas*/ 
const buttons = document.querySelectorAll('.menu-btn');
const contens = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click',() => {

        contens.forEach(content => content.classList.add('hidden'));


        buttons.forEach(btn => btn.classList.remove('active'));


        button.classList.add('active');


        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.remove('hidden');
    });
});
/* Este codigo es para que a la hora de clickear la imagen seleccione directamente el enlace y lo lleve al lugar*/
document.querySelectorAll('.section-etapas').forEach(div =>{
    div.addEventListener('click', () => {
        const link = div.querySelector('a');
        if(link){
            window.location.href = link.href;
        }
    });
});
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

const seccionesEtapas = document.querySelectorAll('.section-etapas, .section');
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