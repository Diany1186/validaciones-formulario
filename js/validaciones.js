export function valida(input ){
    const tipoDeInput = input.dataset.tipo//el dataset obtiene todos los data, .tipo busca los que sean tipo
    
    if (validadores[tipoDeInput]) {//verifica si en el objeto validadores exite el data de tipo input
        validadores[tipoDeInput](input);
    }
    
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input); 
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError = { //objetos que contienen el tipo de llave 
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Debe contener al menos 6 caracteres y máximo 12, y al menos una mayúcula, una minúscula y un número, no puede contener caracteres especiales ni espacios."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes ser mayor de 18 años"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch:"El formatio requerido es XXXXXXXXXX 10 números"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch:"La dirección debe tener entre 10 y 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch:"La ciudad debe tener entre 10 y 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch:"El estado debe tener entre 10 y 40 caracteres"
    }
}
const validadores = {   //objeto que hace coincidir el tipo con la llave de este objeto
    nacimiento: (input) => validarNacimiento(input), //recibe el input y llama a la función validarNacimiento
};

function mostrarMensajeDeError (tipoDeInput,input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            console.log(error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });

    return mensaje;
}

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
