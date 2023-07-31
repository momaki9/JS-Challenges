var startBtn = document.getElementById("quiz-start");
var question = document.getElementById("quiz-question");
var questionChoices = document.getElementById("quiz-choices");
var nextBtnDocument = document.getElementById("next-btn");
var questionNumber = 0;

var currentQuestion= function (questionNumber) {
    startBtn.hidden = true;
    question.textContent = questions[questionNumber].quest;
    for (let index = 0; index < questions[questionNumber].choices.length; index++) {
        var answerChoice = document.createElement("li");
        answerChoice.textContent = questions[questionNumber].choices[index];
        questionChoices.appendChild(answerChoice)
    }
    var nextBtn = document.createElement("button");
    nextBtn.textContent = "Next"
    nextBtnDocument.appendChild(nextBtn);
    nextBtn.addEventListener("click", nextQuestion)
};

var nextQuestion = function () {
    questionChoices.replaceChildren();
    nextBtnDocument.replaceChildren();
    startQuiz();
};

var startQuiz = function() {
    currentQuestion(questionNumber);
    questionNumber++;
}

startBtn.addEventListener("click", startQuiz);