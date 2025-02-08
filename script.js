const question = [
    {
        question: "How many chromosomes do humanbeings have?",
        answers: [
            {text: "46 pairs", correct: false},
            {text: "23 pairs", correct: true},
            {text: "14 pairs", correct: true},
            {text: "22 pairs", correct: false},    
        ]
    },

    {
        question: "Which is the highest mountain in the world?",
        answers: [
            {text: "Mount Everest", correct: true},
            {text: "Cho Oyu", correct: false},
            {text: "Manaslu", correct: false},
            {text: "K2", correct: false},
        ] 
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
 
    {
        question: "Which is the third planet?",
        answers: [
            {text: "Jupita", correct: false},
            {text: "Mars", correct: false},
            {text: "Mercury", correct: false},
            {text: "Earth", correct: true},
        ]
    },

  
];

const questionElement = document.getElementById("question");
const questionButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });

    function selectedBtn(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
        }else{
            selectedBtn.classList.add("incorrect");
        }
    }
}

startQuiz();