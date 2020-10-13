import parte1 from "./Modules/parte1.js";

var caja = document.getElementById("caja");
window.cargar = parte1.cargar;
window.registrar = parte1.registrar.bind(parte1);

document.getElementById("parte1").addEventListener("click",() =>{
    caja.innerHTML=parte1.data;
    parte1.cargar();
});
