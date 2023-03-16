var oddOrEven = function (num) {
    if (num % 2 == 0) {
        return "Even";
    } else return "Odd";
};

console.log(oddOrEven(3)); // returns 'Odd'
console.log(oddOrEven(13)); // returns 'Odd'
console.log(oddOrEven(32)); // returns 'Even'