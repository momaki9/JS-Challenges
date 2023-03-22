// variables needed
var startBtn = document.getElementById('start-btn');
var timeEl = document.getElementById('game-time');
var wordEl = document.getElementById('word');
var ouputEl = document.getElementById("interactive");
var numBlanks = 0;
var chosenWord = "";
var blankArray = [];
var time = 0;
var wins = 0;
var losses = 0;

// event listener triggered with start button
startBtn.addEventListener('click', startTimer);

// list of available words
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
    time = 10;
    startBtn.disabled = true;
    guessWord();
    var timeInterval = setInterval(function () {
        time--;
        timeEl.textContent = time;
        if (time <= 0) {
            clearInterval(timeInterval);
            startBtn.disabled = false;
            ouputEl.textContent = chosenWord;
        }
    }, 1000)
};

// write a function that takes the random word and hides it
function guessWord() {

    blankArray = [];
    chosenWord = chooseRandomWord().toLowerCase();
    var letters = chosenWord.split('');
    for (var i = 0; i < letters.length; i++) {
      blankArray.push("_");
    }
    ouputEl.textContent = blankArray.join("");
  
    document.addEventListener("keypress", function (event) {
        console.log(event.key);
        var pressedKey = event.key.toLowerCase();
        if (letters.includes(pressedKey)) {
            for (var i = 0; i < letters.length; i++) {
                if (letters[i] == pressedKey) {
                    console.log(blankArray)
                    blankArray[i] = letters[i];
                }
            }
            ouputEl.textContent = blankArray.join("");
        }
        if (!blankArray.includes("_")) {
            wins++;
        }
    });

};




// write a function that processes the guessed letters from keyboard keys
function keyEvent(event) {
    console.log(event.key);
    return event.key;
};

// make sure to account for capital letters