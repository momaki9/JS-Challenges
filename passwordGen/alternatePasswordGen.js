var nums = "0123456789";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@$~%^&*()-_";

var generatePassword = function () {

    var possiblePassword = '';

    var passwordLength = window.prompt("Specify how many characters long. (Enter a number between 8 and 32)");

    if (!passwordLength || passwordLength < 8 || passwordLength > 32) {
        window.alert("Try again! Password length must be between 8 and 32");
        return generatePassword();
    };

    var includeNums = window.confirm("Include numbers?");

    if (includeNums) {
        possiblePassword = possiblePassword + nums;
    }

    var includeUpperChars = window.confirm("Include UPPER CASE letters?");

    if (includeUpperChars) {
        possiblePassword = possiblePassword + lowerChars;
    }

    var includeLowerChars = window.confirm("Include lower case letters?");

    if (includeLowerChars) {
        possiblePassword = possiblePassword + upperChars;
    }

    var includeSymbols = window.confirm("Include symbols?");

    if (includeSymbols) {
        possiblePassword = possiblePassword + symbols;
    }

    var passwordArray = possiblePassword.split("")
    var generatePass = [];

    for (let index = 0; index < passwordLength; index++) {
        var randomNumber = Math.floor(Math.random() * possiblePassword.length);
        generatePass = generatePass.concat(passwordArray[randomNumber]);

    };

    generatePass = generatePass.join('');
    document.getElementById('password-output').innerHTML = generatePass;

};

var passGenBtn = document.getElementById('password-generator');
passGenBtn.addEventListener("click", generatePassword);