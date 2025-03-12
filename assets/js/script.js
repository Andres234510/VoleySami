document.addEventListener("DOMContentLoaded", () => {
    // Menú responsive
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("main-nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });
    }

    // Funcionalidad de preguntas y respuestas
    const questions = {
        "q1": "La altura reglamentaria de la red en voleibol es de 2.43 m para hombres y 2.24 m para mujeres.",
        "q2": "El líbero no puede atacar ni sacar y se especializa en la defensa y la recepción.",
        "q3": "Para realizar un saque flotante, golpea la pelota con la palma de la mano sin hacer giro de muñeca.",
        "q4": "La comunicación es clave para evitar errores y mejorar la coordinación del equipo.",
        "q5": "Los errores más comunes incluyen mala técnica de recepción y falta de comunicación.",
        "q6": "Para mejorar el salto vertical, realiza ejercicios pliométricos como sentadillas con salto y saltos en caja.",
        "q7": "Las lesiones más comunes son esguinces de tobillo y tendinitis rotuliana. Se pueden prevenir con un buen calentamiento.",
        "q8": "El sistema 5-1 tiene un solo colocador, mientras que el 4-2 usa dos colocadores en la zona delantera.",
        "q9": "Algunos de los mejores jugadores incluyen a Giba, Karch Kiraly y Wilfredo León.",
        "q10": "El voleibol ha evolucionado con reglas más dinámicas y mayor velocidad en el juego."
    };

    const questionButtons = document.querySelectorAll(".question-btn");
    const answerBox = document.getElementById("answer-box");

    questionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const questionKey = button.getAttribute("data-question");
            answerBox.innerHTML = `<p>${questions[questionKey]}</p>`;
            answerBox.style.display = "block";
        });
    });
});
