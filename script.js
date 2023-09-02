const questions = [
    {
        question: '¿Cuál es la capital de Filipinas?',
        answers: [
            { text: 'Manila', correct: true },
            { text: 'Tirana', correct: false },
            { text: 'Berlín', correct: false },
            { text: 'Kabul', correct: false },
        ]
    },
    {
        question: '¿Cuál es el río más caudaloso del mundo?',
        answers: [
            { text: 'Yangtsé ', correct: false },
            { text: 'Orinoco', correct: false },
            { text: 'Amazonas', correct: true },
            { text: 'Paraná', correct: false },
        ]
    },
    {
        question: ' ¿En qué país se encuentra el río Po?',
        answers: [
            { text: 'España', correct: false },
            { text: 'Chile', correct: false },
            { text: 'Uruguay', correct: false },
            { text: 'Italia', correct: true },
        ]
    },
    {
        pregunta: '¿Cuál es la montaña más alta de Europa?',
        answers: [
            { text: 'Monte Elbrús', correct: true },
            { text: 'Mont Blanc', correct: false },
            { text: 'Everest', correct: false },
            { text: 'Monte Dij-Tau', correct: false },
        ]
    },
    {
        question: '¿En qué país se encuentra el pico Aconcagua?',
        answers: [
            { text: 'Chile', correct: false },
            { text: 'Argentina', correct: true },
            { text: 'Perú', correct: false },
            { text: 'Ecuador', correct: false },
        ]
    },
    {
        question: '¿Cuál es el nombre la perra de Agustina Iribarne Wynne?',
        answers: [
            { text: 'Berta ', correct: false },
            { text: 'Marta', correct: false },
            { text: 'Gula', correct: true },
            { text: 'Gonzalo', correct: false },
        ]
    },
    {
        question: '¿Cuál es el país más visitado del mundo?',
        answers: [
            { text: 'Japón', correct: false },
            { text: 'China', correct: false },
            { text: 'Francia', correct: true },
            { text: 'Estados Unidos', correct: false },
        ]
    },
    {
        question: '¿Cuál es el país del mundo con mayor población?',
        answers: [
            { text: 'Brasil', correct: false },
            { text: 'India', correct: false },
            { text: 'Rusia', correct: false },
            { text: 'China', correct: true },
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente"
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = 'none'
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if (isCorrect) {
        selectedBtn.classList.add('correct')
        score++
    } else {
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true;
    })
    nextButton.
        style.display = 'block';
}
function showScore(){
    resetState()
    questionElement.innerHTML = `Tu puntuación ${score} de ${questions.length}!`
    nextButton.innerHTML = 'Jugar de nuevo'
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else {
        showScore() 
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz()
    }
})

startQuiz()