var startBtn = document.getElementById('start-btn');
var timeEl = document.getElementById('game-time');
var wordEl = document.getElementById('word');

startBtn.addEventListener('click', startTimer);

var time = 10;

var words = [
    "JavaScript",
    "API",
    "Objects",
    "Variables",
    "Button",
    "HTML",
    "Stylesheet",
    "Element",
    "Array",
    "String",
    "Boolean",
    "JSON",
    "Expression",
    "Function",
    "Loop",
    "Iterator",
    "Operator",
    "Value",
    "Null",
    "Undefined"
];

// write a function that chooses a random word from the words array
function chooseRandomWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var word = words[randomIndex];
    console.log(word);
    return word;
};

// write a function that runs a timer
function startTimer() {
    guessWord();
    var timeInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
        console.log(time);
        if (time === 0) {
            clearInterval(timeInterval);
        }
    }, 1000)
};

// write a function that takes the random word and hides it

function guessWord(){
    var chosenWord = chooseRandomWord();
    wordEl.textContent = chosenWord;
    var letters = chosenWord.split('')
    console.log(letters);
    for (let index = 0; index < letters.length; index++) {
        var blank = "_";
        letters[index] = blank;
        console.log(letters[index])
    }
}

// write a function that processes the guessed letters from keyboard keys
function keyEvent(event){
    console.log(event.key);
};

document.addEventListener("keypress", keyEvent);