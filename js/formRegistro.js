// Cuando la página se cargue este será el primer evento qeu se emepzará a ejecutar.
window.onload = () => {
    let form = document.querySelector("#registroForm");
    
    form.nombre.addEventListener("input", validarNombre);
    form.apellido.addEventListener("input", validarApellido);
    form.edad.addEventListener("input", validarEdad);
    form.telefono.addEventListener("input", validarTelefono);
    form.direccion.addEventListener("input", validarDireccion);
    form.email.addEventListener("input", validarEmail);
    form.password1.addEventListener("input", validarPassword1);
    form.password2.addEventListener("input", validarPassword2);
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

function validarApellido() {
    let apellido = document.querySelector("#apellido");
    let msnError = document.querySelector(".apellidoError");

    if (!apellido.value.trim()) { //Si está vacío....
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent = "El apellido es obligatorio";
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent = "El apellido solo puede conteneder letras y espacio";
        return false;
    } else {
        apellido.classList.add("validoInput");
        apellido.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }
}

function validarEdad() {
    let edad = document.querySelector("#edad");
    let msnError = document.querySelector(".edadError");

    if (isNaN(edad.value) || !edad.value.trim()) { //Si está vacío....
        edad.classList.add("errorInput");
        edad.classList.remove("validoInput");
        msnError.textContent = "La edad solo puede conteneder números";
        return false;
    } else if (edad.value <= 0 || edad.value > 100) {
        edad.classList.add("errorInput");
        edad.classList.remove("validoInput");
        msnError.textContent = "El edad debe ser mayor que 0 y menor que 100";
        return false;
    } else {
        edad.classList.remove("errorInput");
        edad.classList.add("validoInput");
        msnError.textContent = "";
        return true;
    }

    // /^[6789]\d{8}$/
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

function validarDireccion() {
    let direccion = document.querySelector("#direccion");
    let msnError = document.querySelector(".direccionError");

    if (!direccion.value.trim()) { //Si está vacío....
        direccion.classList.add("errorInput");
        direccion.classList.remove("validoInput");
        msnError.textContent = "La direccion debe contener solo letras y números";
        return false;
    } else if (!/[a-zA-Z0-9]/.test(direccion.value)) {
        direccion.classList.add("errorInput");
        direccion.classList.remove("validoInput");
        msnError.textContent = "El direccion debe contener solo letras y números";
        return false;
    } else {
        direccion.classList.add("validoInput");
        direccion.classList.remove("errorInput");
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

function validarPassword1() {
    let password1 = document.querySelector("#password1");
    let msnError = document.querySelector(".password1Error");

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password1.value)) {
        password1.classList.add("errorInput");
        password1.classList.remove("validoInput");
        msnError.textContent = "El password1 debe contener 8 carácteres: al menos 1 mayúscula, 1 minúscula y 1 número";
        return false;
    } else {
        password1.classList.add("validoInput");
        password1.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    } 
}

function validarPassword2() {
    let password1 = document.querySelector("#password1");
    let password2 = document.querySelector("#password2");
    let msnError = document.querySelector(".password2Error");

    if (password1===password2 || !password2.value.trim()) {
        password2.classList.add("errorInput");
        password2.classList.remove("validoInput");
        msnError.textContent = "Las contraseñas no coinciden";
    } else {
        password2.classList.add("validoInput");
        password2.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    } 
}
