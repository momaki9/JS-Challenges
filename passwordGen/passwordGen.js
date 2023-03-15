var nums = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "$", "~", "%", "^", "&", "*", "(", ")", "-", "_"];

var generatePassword = function() {

    var possiblePassword = [];

    var passwordLength = window.prompt("Specify how many characters long. (Enter a number between 8 and 32)");

    if (!passwordLength || passwordLength < 8 || passwordLength > 32) {
        window.alert("Try again! Password length must be between 8 and 32");
        return generatePassword();
    };

    var includeNums = window.confirm("Include numbers?");
    
    if (includeNums) {
        possiblePassword = possiblePassword.concat(nums);
    }

    var includeUpperChars = window.confirm("Include UPPER CASE letters?");

    if (includeUpperChars) {
        possiblePassword = possiblePassword.concat(lowerChars);
    }

    var includeLowerChars = window.confirm("Include lower case letters?");

    if (includeLowerChars) {
        possiblePassword = possiblePassword.concat(upperChars);
    }

    var includeSymbols = window.confirm("Include symbols?");

    if (includeSymbols) {
        possiblePassword = possiblePassword.concat(symbols);
    }

    var generatePass = [];

    for (let index = 0; index < passwordLength; index++) {
        var randomNumber = Math.floor(Math.random() * possiblePassword.length);


        generatePass = generatePass.concat(possiblePassword[randomNumber])
        
    }

    generatePass = generatePass.join('');

    document.getElementById('password-output').innerHTML = generatePass;

};

var passGenBtn = document.getElementById('password-generator');
passGenBtn.addEventListener("click", generatePassword);
