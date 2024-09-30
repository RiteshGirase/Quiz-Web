const questions = [
    {
        question : "Which is the most fastest car in world?",
        answers : [
            {
                text : "Ferrari", correct: false
            },
            {
                text : "Porsche", correct: false
            },
            {
                text : "Bugati", correct: true
            },
            {
                text : "Mastang", correct: false
            },
        ]
    },

    {
        question : "Which is largest animal in the world?",
        answers : [
            {
                text : "Shark", correct: false
            },
            {
                text : "Dolphin", correct: false
            },
            {
                text : "Blue whale", correct: true
            },
            {
                text : "Giraffe", correct: false
            },
        ]
    },

    {
        question : "Which is the largest desert in the world ",
        answers : [
            {
                text : "kalahari", correct: false
            },
            {
                text : "Gobi", correct: false
            },
            {
                text : "Sahara", correct: false
            },
            {
                text : "Antarctica", correct: true
            },
        ]
    },

    {
        question : "Which is the smallest continent in the world?",
        answers : [
            {
                text : "Asia", correct: false
            },
            {
                text : "Australia", correct: true
            },
            {
                text : "Arctic", correct: false
            },
            {
                text : "Africa", correct: false
            },
        ]
    },

];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("ans-btn");

const nextButton = document.getElementById("next-btn");

let currentindex = 0;
let score = 0;

function startQuiz(){
    currentindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentquestion = questions[currentindex];
    let questionNo = currentindex + 1;
    questionElement.innerHTML = questionNo + "." + currentquestion.question;

    currentquestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    // console.log(answerButton.firstChild);
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
    
}

function selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
      selectbtn.classList.add("incorrect");  
    }
    console.log(answerButton.children);
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentindex++;
    if(currentindex < questions.length){
        showQuestion();
    }
    else{
      showScore();  
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentindex < questions.length){
        handleNextButton();
    }
    else{
      startQuiz();  
    }
})

startQuiz();

