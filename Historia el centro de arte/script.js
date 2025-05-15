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
document.querySelectorAll('.section').forEach(div =>{
    div.addEventListener('click', () => {
        const link = div.querySelector('a');
        if(link){
            link.click();
        }
    });
});