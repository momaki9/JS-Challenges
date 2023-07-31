var startBtn = document.getElementById("quiz-start");
var question = document.getElementById("quiz-question");
var questionChoices = document.getElementById("quiz-choices");
var questions = [
    {
      quest: "What does JS stand for?" ,
      choices: ["Jane Smith - a famous coder", "JavaScript", "A famous computer brand"],
      correct: "JavaScript"
    },
    {
        quest: "What does the keyword var mean?" ,
        choices: ["variable", "Varsity", "Varying String Size"],
        correct: "Variable"
    }
];

var quizContent = document.getElementById("quiz-content");

document.replaceChildren

function questionOne() {
    console.log("I work");
    startBtn.hidden = true;
    // var question = document.createElement("h3");
    question.textContent = questions[0].quest;
    // quizContent.appendChild(question);
    for (let index = 0; index < questions[0].choices.length; index++) {
        var answerChoice = document.createElement("li");
        answerChoice.setAttribute("id", "testing123")
        answerChoice.textContent = questions[0].choices[index];
        questionChoices.appendChild(answerChoice)
    }
    var nextBtn = document.createElement("button");
    nextBtn.textContent = "Next"
    quizContent.appendChild(nextBtn);
    nextBtn.addEventListener("click", emptyChoices)
};

var emptyChoices = function(){
    console.log(questionChoices.children);
    questionChoices.replaceChildren();
    questionTwo();
};

function questionTwo() {
    console.log("I work too");
    // var question = document.createElement("h3");
    question.textContent = questions[1].quest;
    // quizContent.appendChild(question);
    for (let index = 0; index < questions[1].choices.length; index++) {
        var answerChoice = document.createElement("li");
        answerChoice.textContent = questions[1].choices[index];
        questionChoices.appendChild(answerChoice)
    }  
};

startBtn.addEventListener("click", questionOne);