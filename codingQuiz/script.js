var startBtn = document.getElementById("quiz-start");
var question = document.getElementById("quiz-question");
var questionChoices = document.getElementById("quiz-choices");
var nextBtnDocument = document.getElementById("next-btn");
var quizEl = document.getElementById("timer");
var questionNumber = 0;
var time = 45;

var currentQuestion = function (questionNumber) {
    if (questionNumber < questions.length) {
        startBtn.hidden = true;
        question.textContent = questions[questionNumber].quest;
        var correctAnswer = questions[questionNumber].correct;
        for (let index = 0; index < questions[questionNumber].choices.length; index++) {
            var answerChoice = document.createElement("button");
            answerChoice.setAttribute("class", "answer-choices");
            answerChoice.textContent = questions[questionNumber].choices[index];
            questionChoices.appendChild(answerChoice);
            answerChoice.addEventListener("click", function (event) {
                // console.log(correctAnswer);
                var chosenAnswer = event.target.textContent;
                // console.log(chosenAnswer);
                // console.log(questionNumber);
                if (chosenAnswer === correctAnswer) {
                    console.log("correct");
                    nextQuestion();
                } else {
                    console.log("wrong");
                    time = time - 5;
                    nextQuestion();
                }
            });
        };

        var nextBtn = document.createElement("button");
        nextBtn.textContent = "Next";
        nextBtnDocument.appendChild(nextBtn);
        if (questionNumber === 4) {
            nextBtn.hidden = true;
        }
        nextBtn.addEventListener("click", nextQuestion);
    } else {
        finalPage();
    }
};

var nextQuestion = function () {

    if (questionNumber < questions.length) {
        questionChoices.replaceChildren();
        nextBtnDocument.replaceChildren();
        questionNumber++;
        currentQuestion(questionNumber);
    }

};

var startQuiz = function () {
    currentQuestion(questionNumber);
    quizTimer();
};

var quizTimer = function () {
    var quizTime = setInterval(function () {
        if (questionNumber === questions.length) {
            clearInterval(quizTime);
        }
        if (time == 0) {
            clearInterval(quizTime)
        } else {
            time--;
            quizEl.textContent = time;
        }
    }, 1000);
};

startBtn.addEventListener("click", startQuiz);

var finalPage = function() {
    questionChoices.replaceChildren();
    nextBtnDocument.replaceChildren();
    question.textContent = "Enter Initials to save your score!";
    var initialsEl = document.createElement("input");
    var saveInitials = document.createElement("button");
    saveInitials.textContent = "Save"
    question.appendChild(initialsEl);
    question.appendChild(saveInitials);
};
