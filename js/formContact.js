// Cuando la página se cargue este será el primer evento qeu se emepzará a ejecutar.
window.onload = () => {
    let form = document.querySelector("#registroFormContact");
    
    form.nombre.addEventListener("input", validarNombre);
    form.telefono.addEventListener("input", validarTelefono);
    form.email.addEventListener("input", validarEmail);
    form.reset.addEventListener("click", () => {
        inputs = document.querySelectorAll("input"); //Es un Array de todos los inputs del HTML.
        inputs.forEach(element => {
            element.classList.remove("errorInput");
            element.classList.remove("validoInput");
        });
        let mensajeError = document.querySelectorAll(".msn");
        mensajeError.forEach(mensaje => {
            mensaje.textContent = "";
        })
    });
}


// Creámos una función donde validamos el formulario.
function validarFormulario() {
    if (validarNombre()) {
        return true;
    } else {
        return false;
    }
}

// Creamos las funciones con las que validaremos los datos ingresados.
function validarNombre() {
    let nombre = document.querySelector("#nombre");
    let msnError = document.querySelector(".nombreError");

    if (!nombre.value.trim()) { //Si está vacío....
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "El nombre es obligatorio";
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "El nombre solo puede conteneder letras y espacio";
        return false;
    } else {
        nombre.classList.add("validoInput");
        nombre.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }
}


// También existe la posibilidad de evaluar una expresión 
function validarTelefono() {
    let telefono = document.querySelector("#telefono");
    let msnError = document.querySelector(".telefonoError");

    if (!telefono.value.trim()) { //Si está vacío....
        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput");
        msnError.textContent = "El telefono solo puede conteneder números";
        return false;
    } else if (!/^[6789]\d{8}$/.test(telefono.value)) {
        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput");
        msnError.textContent = "El telefono debe comenzar por [6,7,8,9] y tener 9 dígitos";
        return false;
    } else {
        telefono.classList.add("validoInput");
        telefono.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }
}



function validarEmail() {
    let email = document.querySelector("#email");
    let msnError = document.querySelector(".emailError");

    if (!email.value.trim()) { //Si está vacío....
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent = "La email es obligatorio";
        return false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent = "El formato del email es erroneo";
        return false;
    } else {
        email.classList.add("validoInput");
        email.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }
}




