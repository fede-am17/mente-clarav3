const formulario = document.getElementById("formulario-contacto");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

function guardarMensaje(datos) {
    const mensajes = JSON.parse(localStorage.getItem("mensajesMenteClara") || "[]");
    mensajes.push(datos);
    localStorage.setItem("mensajesMenteClara", JSON.stringify(mensajes));
}

if (formulario) {
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    function validarNombre() {
        const valor = nombre.value.trim();
        if (!valor) return "El nombre es obligatorio.";
        if (valor.length < 3) return "Escribe al menos 3 letras.";
        if (!/^[a-záéíóúüñ\s'-]+$/.test(valor))
            return "Usa solo letras minúsculas. No se permiten números ni mayúsculas.";
        return "";
    }
    function validarCorreo() {
        const valor = correo.value.trim();
        if (!valor) return "El correo es obligatorio.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor))
            return "Escribe un correo válido. Ejemplo: ejemplo@correo.com.";
        return "";
    }
    function validarAsunto() {
        return asunto.value === "" ? "Selecciona un asunto." : "";
    }
    function validarMensaje() {
        const valor = mensaje.value.trim();
        if (!valor) return "El mensaje es obligatorio.";
        if (valor.length < 10) return "Escribe al menos 10 caracteres.";
        return "";
    }

    function mostrarError(id, texto) {
        document.getElementById("error-" + id).textContent = texto;
        const campo = document.getElementById(id);
        campo.classList.toggle("campo-invalido", texto !== "");
        campo.setAttribute("aria-invalid", texto !== "" ? "true" : "false");
    }

    nombre.addEventListener("input", function() { mostrarError("nombre", validarNombre()); });
    correo.addEventListener("input", function() { mostrarError("correo", validarCorreo()); });
    asunto.addEventListener("change", function() { mostrarError("asunto", validarAsunto()); });
    mensaje.addEventListener("input", function() { mostrarError("mensaje", validarMensaje()); });

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const errores = {
            nombre: validarNombre(),
            correo: validarCorreo(),
            asunto: validarAsunto(),
            mensaje: validarMensaje()
        };

        for (const id in errores) mostrarError(id, errores[id]);

        const primerError = Object.keys(errores).find(function(id) {
            return errores[id] !== "";
        });
        if (primerError) {
            mensajeConfirmacion.textContent = "Revisa los campos marcados en rojo.";
            mensajeConfirmacion.style.color = "#b42318";
            document.getElementById(primerError).focus();
            return;
        }

        const nuevoMensaje = {
            nombre: nombre.value.trim(),
            correo: correo.value.trim(),
            asunto: asunto.value,
            mensaje: mensaje.value.trim(),
            fecha: new Date().toLocaleString()
        };
        try {
            guardarMensaje(nuevoMensaje);
            mensajeConfirmacion.textContent = "¡Gracias, " + nuevoMensaje.nombre + "! Tu mensaje se guardó correctamente en este navegador.";
            mensajeConfirmacion.style.color = "#286b50";
            formulario.reset();
            for (const id of Object.keys(errores)) mostrarError(id, "");
        } catch (error) {
            mensajeConfirmacion.textContent = "No se pudo guardar el mensaje. Comprueba el almacenamiento del navegador.";
            mensajeConfirmacion.style.color = "#b42318";
        }
    });
}
