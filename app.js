document.addEventListener("DOMContentLoaded", function() {

    const botonTema = document.getElementById("boton-tema");
    const temaGuardado = localStorage.getItem("temaMenteClara");
    if (temaGuardado === "oscuro") document.body.classList.add("tema-oscuro");
    actualizarTextoTema();
    if (botonTema) {
        botonTema.addEventListener("click", function() {
            document.body.classList.toggle("tema-oscuro");
            localStorage.setItem("temaMenteClara", document.body.classList.contains("tema-oscuro") ? "oscuro" : "claro");
            actualizarTextoTema();
        });
    }
    function actualizarTextoTema() {
        if (!botonTema) return;
        const oscuro = document.body.classList.contains("tema-oscuro");
        botonTema.textContent = oscuro ? "☀️ Tema claro" : "🌙 Tema oscuro";
        botonTema.setAttribute("aria-label", oscuro ? "Activar tema claro" : "Activar tema oscuro");
    }

    const botonMenu = document.getElementById("boton-menu");
    const menu = document.querySelector(".menu");
    if (botonMenu && menu) {
        botonMenu.addEventListener("click", function() {
            const abierto = menu.classList.toggle("menu-abierto");
            botonMenu.setAttribute("aria-expanded", abierto);
            botonMenu.textContent = abierto ? "✕ Cerrar" : "☰ Menú";
        });
    }

    const consejos = [
        "Cada decisión saludable es un paso hacia un futuro mejor.",
        "Pedir ayuda es una muestra de valentía, no de debilidad.",
        "Tu bienestar merece tiempo, atención y respeto.",
        "Decir NO también es una forma de cuidarte.",
        "Rodéate de personas que respeten tus decisiones.",
        "No tienes que enfrentar tus dificultades en soledad.",
        "Un día difícil no define todo tu camino.",
        "Informarte te ayuda a tomar decisiones responsables.",
        "Tus metas merecen decisiones que te acerquen a ellas.",
        "Cuidar tu mente es tan importante como cuidar tu cuerpo.",
        "Hablar de lo que sientes puede ser el primer paso.",
        "No permitas que la presión de grupo decida por ti.",
        "Avanzar poco a poco también es avanzar.",
        "Elige actividades que te hagan sentir bien y crecer.",
        "Tu futuro se construye con pequeñas decisiones diarias.",
        "Equivocarte no te quita la oportunidad de aprender.",
        "Busca información confiable antes de tomar decisiones.",
        "Tus límites merecen ser respetados.",
        "La amistad verdadera no te obliga a hacer algo que no quieres.",
        "Siempre puedes buscar orientación y comenzar de nuevo."
    ];
    const textoConsejo = document.getElementById("texto-consejo");
    const botonConsejo = document.getElementById("otro-consejo");
    let consejoAnterior = -1;
    function mostrarConsejo() {
        if (!textoConsejo) return;
        let indice;
        do { indice = Math.floor(Math.random() * consejos.length); } while (consejos.length > 1 && indice === consejoAnterior);
        consejoAnterior = indice;
        textoConsejo.textContent = consejos[indice];
    }
    if (botonConsejo) botonConsejo.addEventListener("click", mostrarConsejo);

    const lista = document.getElementById("lista-compromisos");
    const textoProgreso = document.getElementById("progreso-compromiso");
    const barra = document.getElementById("barra-compromiso");
    const compromisos = [
        "Dedicar unos minutos a respirar y relajarme.",
        "Conversar con alguien de confianza.",
        "Realizar una actividad física o recreativa.",
        "Informarme y tomar una decisión saludable."
    ];

    if (lista && textoProgreso && barra) {

        for (let indice = 0; indice < compromisos.length; indice++) {
            const etiqueta = document.createElement("label");
            etiqueta.className = "compromiso-item";
            const casilla = document.createElement("input");
            casilla.type = "checkbox";
            casilla.addEventListener("change", actualizarProgreso);
            const texto = document.createElement("span");
            texto.textContent = compromisos[indice];
            etiqueta.appendChild(casilla);
            etiqueta.appendChild(texto);
            lista.appendChild(etiqueta);
        }

        function actualizarProgreso() {
            const marcados = lista.querySelectorAll('input[type="checkbox"]:checked').length;
            const total = compromisos.length;
            textoProgreso.textContent = marcados + " de " + total + " compromisos completados";
            barra.style.width = (marcados / total * 100) + "%";
            if (marcados === total) {
                textoProgreso.textContent = "¡Excelente! Has completado todos tus compromisos de hoy. 🎉";
            }
        }
        actualizarProgreso();
    }
});
