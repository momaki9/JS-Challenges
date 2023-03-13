console.log("Rock Paper Scissors Game");

var wins = 0;
wins = localStorage.getItem('wins');
var losses = 0;
losses = localStorage.getItem('losses');
var ties = 0;
ties = localStorage.getItem('ties');

var options = ["R", "P", "S"];

var runGame = function () {

    var userChoice = window.prompt('Enter R, P, or S:');

    var randomNumber = Math.floor(Math.random() * options.length);

    var computerChoice = options[randomNumber];

    console.log(computerChoice);

    console.log(randomNumber);

    if (!userChoice) {
        console.log("Nothing was entered")
        return;
    }

    userChoice = userChoice.toUpperCase();

    //TODO: enter logic to deal with user entering anything other than R, P, or S

    window.alert(`The computer chose ${computerChoice}`);

    if (userChoice == computerChoice) {
        ties++;
        localStorage.setItem('ties', ties);
        window.alert("It's a tie!")
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
    ) {
        wins++
        localStorage.setItem('wins', wins);
        window.alert("You've won!")
    } else {
        losses++;
        localStorage.setItem('losses', losses);
        window.alert("You've lost!")
    }

    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        runGame();
    } else {
        gameStats();
        return;
    }

};

var gameStats = function () {
    var winStat = document.getElementById('wins');
    var storedWinStat = localStorage.getItem('wins');
    winStat.innerHTML = storedWinStat;

    var lossStat = document.getElementById('losses');
    var storedlossStat = localStorage.getItem('losses');
    lossStat.innerHTML = storedlossStat;

    var tieStat = document.getElementById('ties');
    var storedtieStat = localStorage.getItem('ties');
    tieStat.innerHTML = storedtieStat;
};

gameStats();

var startBtn = document.getElementById('start-game');
startBtn.addEventListener('click', runGame);

var clearStatBtn = document.getElementById('clear-stats');

var clearStats = function() {
    localStorage.removeItem("wins");
    localStorage.removeItem("losses");
    localStorage.removeItem("ties");
    window.location.reload();
};

clearStatBtn.addEventListener("click", clearStats);