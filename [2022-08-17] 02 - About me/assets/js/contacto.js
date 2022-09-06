import {activateNotification} from './notification-manager.js';

let activar = document.querySelectorAll("#enviar");

activar.forEach(element => {    
    element.addEventListener("click", ()=>{
        let type, mensaje, icono;
        let rng = randomInteger(0,1);        
        switch(rng){
            case 1:
                type = "ok";
                mensaje = "Su mensaje ha sido enviado";
                icono = "☑️";
                element.style = "--btn-bg-color: var(--ok-bg-color);--btn-shadow-color: var(--ok-shadow-color)";
                break;
            case 0:
                type = "warn";
                mensaje = "Su mensaje no ha sido enviado";
                icono = "❌";
                element.style = "--btn-bg-color: var(--warn-bg-color);--btn-shadow-color: var(--warn-shadow-color)";                
                break;
            default:
                break;
        }
        activateNotification(type, mensaje, icono);   
        setTimeout(()=>{
            element.style = "";
        }, 4000);     
    });
});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}