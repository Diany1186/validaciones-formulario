import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//selecciona todos los inputs

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {//está atento a los eventos de tipo blur
        valida (input.target);//llama a la función valida para decidir qué acciones tomar de acuerdo al data-tipo
    })
})
