var startBtn = document.getElementById("quiz-start");
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

function doThis() {
    console.log("I work");
    startBtn.hidden = true;
    var question = document.createElement("h3");
    question.textContent = questions[0].quest;
    quizContent.appendChild(question);
    for (let index = 0; index < questions[0].choices.length; index++) {
        var answerChoice = document.createElement("h4");
        answerChoice.textContent = questions[0].choices[index];
        quizContent.appendChild(answerChoice)
    }  
};

startBtn.addEventListener("click", doThis);