var nums = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "$", "~", "%", "^", "&", "*", "(", ")", "-", "_"];

var generatePassword = function() {

    var possiblePassword = [];

    var passwordLength = window.prompt("How many characters would you like your password to have?");

    if (!passwordLength) {
        return;
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

    
    
}


var passGenBtn = document.getElementById('password-generator');

passGenBtn.addEventListener("click", generatePassword);




