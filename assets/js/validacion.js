

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

function valida(input) {

    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.classList.add("formcontato__message__error--valid");
        input.parentNode.querySelector(`[data-error]`).textContent = "";
        // console.log(input.validity);

    } else {
        // console.log(input.validity);
        input.classList.remove("formcontato__message__error--valid");
        input.classList.add("formcontato__message__error--error");

        input.parentNode.querySelector(`[data-error]`).textContent = errorMessage(tipoDeInput, input);
    }

}

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "The name field cannot be empty",
    },
    email: {
        valueMissing: "The mail field cannot be empty",
        typeMismatch: "The mail is invalid",
        patternMismatch: "The mail is invalid",
    },
    asunto: {
        valueMissing: "The subject field cannot be empty",
        typeMismatch: "The matter is not valid",
    },
};


function errorMessage(tipoDeInput, input) {

    let mensaje = "";
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function validarNombre(input) {
    return
}

const validadores = {
    nombre: (input) => validarNombre(input),
};

document.querySelectorAll(`[data-form-error]`);
