const quizData = [
    {
        question: "What is the main character’s name in Quake 4?",
        options: ["Matthew Kane", "John Carmack", "Doomguy", "Strogg Commander"],
        answer: "Matthew Kane"
    },
    {
        question: "Which weapon is best for long-range precision shots?",
        options: ["Rocket Launcher", "Railgun", "Shotgun", "Nailgun"],
        answer: "Railgun"
    },
    {
        question: "What is the alien race you fight in Quake 4?",
        options: ["Covenant", "Strogg", "Combine", "Zerg"],
        answer: "Strogg"
    }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultText = document.getElementById("result");

function loadQuiz() {
    quizData.forEach((q, index) => {
        let questionHTML = `<div class='question'>
            <p>${q.question}</p>`;
        q.options.forEach(option => {
            questionHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>`;
        });
        questionHTML += "</div>";
        quizContainer.innerHTML += questionHTML;
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    localStorage.setItem("quake4BestScore", Math.max(score, localStorage.getItem("quake4BestScore") || 0));
    resultText.innerHTML = `Great job! Your score is ${score} out of ${quizData.length}. Best Score: ${localStorage.getItem("quake4BestScore")}`;
}

submitBtn.addEventListener("click", calculateScore);
loadQuiz();