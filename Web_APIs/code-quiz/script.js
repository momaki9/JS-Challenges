// declare needed variables
var time = 60;

// write questions as objects
var quizQuestions = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Boolean", "Number", "Function", "String"],
        answer: "Function"
    },
    {
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Node",
            "JavaScript Object Notation",
            "JavaScript Open Notation",
            "JavaScript Open Node"
        ],
        answer: "JavaScript Object Notation"
    },
    {
        question: "Which is true of variables in JavaScript?",
        options: [
            "Variables have a fixed value that cannot be changed.",
            "The data inside variables is stored as string only.",
            "Variables can have their values changed.",
            "Variable names are not case-sensitive."
        ],
        answer: "Variables can have their values changed."
    },
    {
        question: "",
        options: [],
        answer: ""
    },
    {
        question: "",
        options: [],
        answer: ""
    },
]

// write timer function
function quizTimer() {
    var quizTime = setInterval(function() {
        time--;
        if (time == 0) {
            clearInterval(quizTime);
        }
    }, 1000)
};

// write function to pick a random question

// write a function to show feedback for each question

//write the init function and choose what runs when the page loads
function init() {

};

// write function to ask for initials

// write function to show and clear highscores