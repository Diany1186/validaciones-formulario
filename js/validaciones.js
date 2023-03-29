export function valida(input){
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};
/*const inputNacimiento = document.querySelector("#birth");

inputNacimiento. addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
})*/

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje ="";
    if (!mayorDeEdad(fechaCliente)) {
        mensaje="Debes ser mayor de 18 años"
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFecha = new Date (fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(), 
    fecha.getUTCDate());
    return diferenciaFecha  <= fechaActual;
};