const preguntasQuiz = [

    {
        numero: 1,

        texto: "¿Qué son las sustancias psicoactivas?",

        opciones: [
            {
                letra: "A",
                texto: "Sustancias que pueden modificar la percepción, el pensamiento y las emociones."
            },
            {
                letra: "B",
                texto: "Alimentos que mejoran la memoria."
            },
            {
                letra: "C",
                texto: "Sustancias que no producen ningún efecto."
            }
        ],

        correcta: "A",

        explicacion: "Las sustancias psicoactivas pueden modificar la percepción, el pensamiento y las emociones."
    },

    {
        numero: 2,

        texto: "¿Por qué es importante prevenir el consumo durante la adolescencia?",

        opciones: [
            {
                letra: "A",
                texto: "Porque todas las personas reaccionan igual."
            },
            {
                letra: "B",
                texto: "Porque el cerebro todavía está en desarrollo y puede ser vulnerable."
            },
            {
                letra: "C",
                texto: "Porque la prevención solo sirve en la adultez."
            }
        ],

        correcta: "B",

        explicacion: "Durante la adolescencia el cerebro todavía está en desarrollo y puede ser más vulnerable a los efectos de las sustancias."
    },

    {
        numero: 3,

        texto: "¿Qué puedes hacer si tus amistades te presionan para consumir?",

        opciones: [
            {
                letra: "A",
                texto: "Aceptar para no quedar fuera del grupo."
            },
            {
                letra: "B",
                texto: "Probar una pequeña cantidad."
            },
            {
                letra: "C",
                texto: "Decir que no y alejarte de la situación."
            }
        ],

        correcta: "C",

        explicacion: "Decir que no y alejarse de una situación de presión es una decisión saludable."
    },

    {
        numero: 4,

        texto: "¿Cuál de las siguientes opciones es un factor de protección?",

        opciones: [
            {
                letra: "A",
                texto: "Tener relaciones saludables y apoyo familiar."
            },
            {
                letra: "B",
                texto: "Aislarse de todas las personas."
            },
            {
                letra: "C",
                texto: "Ocultar los problemas."
            }
        ],

        correcta: "A",

        explicacion: "Las relaciones saludables y el apoyo familiar son factores que ayudan a prevenir el consumo."
    },

    {
        numero: 5,

        texto: "¿Qué debes hacer si una persona pierde el conocimiento después de consumir?",

        opciones: [
            {
                letra: "A",
                texto: "Dejarla dormir hasta que despierte."
            },
            {
                letra: "B",
                texto: "Darle café para que se recupere."
            },
            {
                letra: "C",
                texto: "Buscar atención médica de emergencia."
            }
        ],

        correcta: "C",

        explicacion: "La pérdida de conocimiento puede ser una emergencia médica. Se debe buscar atención inmediatamente."
    },

    {
        numero: 6,

        texto: "¿El consumo de sustancias puede afectar el rendimiento académico?",

        opciones: [
            {
                letra: "A",
                texto: "No, nunca afecta los estudios."
            },
            {
                letra: "B",
                texto: "Sí, puede afectar la memoria, la atención y el aprendizaje."
            },
            {
                letra: "C",
                texto: "Solo afecta a las personas mayores."
            }
        ],

        correcta: "B",

        explicacion: "El consumo puede afectar la memoria, la atención y el rendimiento académico."
    },

    {
        numero: 7,

        texto: "¿Qué significa realizar prevención basada en evidencia?",

        opciones: [
            {
                letra: "A",
                texto: "Utilizar únicamente mensajes de miedo."
            },
            {
                letra: "B",
                texto: "Evitar hablar sobre el tema."
            },
            {
                letra: "C",
                texto: "Aplicar estrategias estudiadas que fortalezcan las habilidades personales."
            }
        ],

        correcta: "C",

        explicacion: "La prevención basada en evidencia utiliza estrategias estudiadas para fortalecer las habilidades personales."
    },

    {
        numero: 8,

        texto: "¿Qué debe hacer una persona que siente que perdió el control sobre su consumo?",

        opciones: [
            {
                letra: "A",
                texto: "Buscar orientación profesional."
            },
            {
                letra: "B",
                texto: "Ocultar el problema."
            },
            {
                letra: "C",
                texto: "Evitar hablar con otras personas."
            }
        ],

        correcta: "A",

        explicacion: "Buscar orientación profesional es una decisión responsable cuando existe un problema relacionado con el consumo."
    },

    {
        numero: 9,

        texto: "¿Cuál es una forma saludable de manejar el estrés?",

        opciones: [
            {
                letra: "A",
                texto: "Consumir sustancias para olvidar los problemas."
            },
            {
                letra: "B",
                texto: "Realizar actividad física, descansar y conversar con alguien de confianza."
            },
            {
                letra: "C",
                texto: "Guardar todas las emociones."
            }
        ],

        correcta: "B",

        explicacion: "La actividad física, el descanso y la comunicación son formas saludables de manejar el estrés."
    },

    {
        numero: 10,

        texto: "¿Cómo puede ayudar una institución educativa a prevenir el consumo?",

        opciones: [
            {
                letra: "A",
                texto: "Excluyendo a quienes necesitan ayuda."
            },
            {
                letra: "B",
                texto: "Evitando hablar sobre el tema."
            },
            {
                letra: "C",
                texto: "Promoviendo información confiable, orientación y habilidades para la vida."
            }
        ],

        correcta: "C",

        explicacion: "Las instituciones educativas pueden ayudar mediante información confiable y orientación."
    }

];

const inicioQuiz = document.getElementById("inicio-quiz");

const botonIniciar = document.getElementById("iniciar-quiz");

const zonaPreguntas = document.getElementById("zona-preguntas");

const contenidoPregunta = document.getElementById("contenido-pregunta");

const numeroPregunta = document.getElementById("numero-pregunta");

const barraProgreso = document.getElementById("progreso");

const explicacionPregunta = document.getElementById("explicacion-pregunta");

const botonSiguiente = document.getElementById("siguiente-pregunta");

const resultado = document.getElementById("resultado");

const puntajeFinal = document.getElementById("puntaje-final");

const mensajeResultado = document.getElementById("mensaje-resultado");

const botonReiniciar = document.getElementById("reiniciar-quiz");

let preguntaActual = 0;

let puntaje = 0;

let respuestaSeleccionada = false;

botonIniciar.addEventListener("click", function() {

    inicioQuiz.hidden = true;

    zonaPreguntas.hidden = false;

    mostrarPregunta();

});

function mostrarPregunta() {

    const pregunta = preguntasQuiz[preguntaActual];

    numeroPregunta.textContent =
        "Pregunta " + (preguntaActual + 1) +
        " de " + preguntasQuiz.length;

    const avance =
        (preguntaActual / preguntasQuiz.length) * 100;

    barraProgreso.style.width = avance + "%";

    contenidoPregunta.innerHTML = "";

    explicacionPregunta.hidden = true;

    explicacionPregunta.textContent = "";

    botonSiguiente.hidden = true;

    respuestaSeleccionada = false;

    const titulo = document.createElement("h3");

    titulo.textContent =
        pregunta.numero + ". " + pregunta.texto;

    contenidoPregunta.appendChild(titulo);

    pregunta.opciones.forEach(function(opcion) {

        const boton = document.createElement("button");

        boton.type = "button";

        boton.className = "respuesta";

        boton.textContent =
            opcion.letra + ". " + opcion.texto;

        boton.dataset.opcion = opcion.letra;

        boton.addEventListener("click", function() {

            comprobarRespuesta(opcion.letra);

        });

        contenidoPregunta.appendChild(boton);

    });

}

function comprobarRespuesta(opcionElegida) {

    if (respuestaSeleccionada === true) {

        return;

    }

    respuestaSeleccionada = true;

    const pregunta = preguntasQuiz[preguntaActual];

    const botones = contenidoPregunta.querySelectorAll(".respuesta");

    botones.forEach(function(boton) {

        boton.disabled = true;

        if (boton.dataset.opcion === pregunta.correcta) {

            boton.classList.add("respuesta-correcta");

        }

        if (
            boton.dataset.opcion === opcionElegida &&
            opcionElegida !== pregunta.correcta
        ) {

            boton.classList.add("respuesta-incorrecta");

        }

    });

    if (opcionElegida === pregunta.correcta) {

        puntaje++;

        explicacionPregunta.textContent =
            "¡Correcto! " + pregunta.explicacion;

    } else {

        explicacionPregunta.textContent =
            "Respuesta incorrecta. La opción correcta era " +
            pregunta.correcta + ". " +
            pregunta.explicacion;

    }

    explicacionPregunta.hidden = false;

    const avance =
        ((preguntaActual + 1) / preguntasQuiz.length) * 100;

    barraProgreso.style.width = avance + "%";

    botonSiguiente.hidden = false;

    if (preguntaActual === preguntasQuiz.length - 1) {

        botonSiguiente.textContent = "Ver resultado";

    }

}

botonSiguiente.addEventListener("click", function() {

    preguntaActual++;

    if (preguntaActual < preguntasQuiz.length) {

        mostrarPregunta();

    } else {

        mostrarResultado();

    }

});

function mostrarResultado() {

    zonaPreguntas.hidden = true;

    resultado.hidden = false;

    puntajeFinal.textContent =
        puntaje + " / " + preguntasQuiz.length;

    if (puntaje >= 8) {

        mensajeResultado.textContent =
            "¡Excelente trabajo! Tienes buenos conocimientos sobre prevención.";

    } else if (puntaje >= 5) {

        mensajeResultado.textContent =
            "¡Buen esfuerzo! Sigue aprendiendo y reforzando tus conocimientos.";

    } else {

        mensajeResultado.textContent =
            "Te recomendamos revisar las secciones informativas e intentarlo nuevamente.";

    }

}

botonReiniciar.addEventListener("click", function() {

    puntaje = 0;

    preguntaActual = 0;

    respuestaSeleccionada = false;

    resultado.hidden = true;

    zonaPreguntas.hidden = false;

    botonSiguiente.textContent = "Siguiente pregunta";

    mostrarPregunta();

});
