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
        // console.log(time);
        if (time === 0) {
            clearInterval(timeInterval);
        }
    }, 1000)
};

// write a function that takes the random word and hides it
var ouputEl = document.getElementById("interactive");

function guessWord(){
    var chosenWord = chooseRandomWord();
    wordEl.textContent = chosenWord;
    var letters = chosenWord.split('');
    var arrayEl = chosenWord.split('');
    console.log(letters);
    for (let index = 0; index < letters.length; index++) {
        var childEl = document.createElement('span');
        var blank = "_";
        letters[index] = blank;
        childEl.textContent = letters[index];
        childEl.setAttribute("class", "span-element");
        childEl.setAttribute("aria-valuetext", arrayEl[index])
        ouputEl.appendChild(childEl);
        console.log(letters[index])
    }
    // var key = keyEvent();
    // console.log(key)
    // var lettersAg = chosenWord.split('');
    
    document.addEventListener("keypress", function(event) {
        var allSpans = document.querySelectorAll('.span-element');
        // console.log(typeof allSpans)
        // console.log(allSpans[2].ariaValueText)
        // console.log(event.key)
        // console.log(lettersAg)
        for (let index = 0; index < allSpans.length; index++) {
            // console.log(allSpans[index].ariaValueText)
            if (allSpans[index].ariaValueText == event.key) {
                console.log("good")
                allSpans[index].textContent = event.key;
            }
            
        }

    });
}

// write a function that processes the guessed letters from keyboard keys
function keyEvent(event){
    console.log(event.key);
    return event.key;
};

// document.addEventListener("keypress", keyEvent);

// make sure to account for capital letters