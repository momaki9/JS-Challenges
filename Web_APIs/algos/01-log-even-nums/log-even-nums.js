// we are decrementing by 2 in the loop to out put even numbers
function logEvenNums(nums) {
    if (nums % 2 == 0) {
        for (var i = 0; i <= nums; i += 2) {
            console.log(i);
        }
    } else return;

};

logEvenNums(6);
logEvenNums(5);
logEvenNums(8);

//alternate method where the even condition is defined within the for loop

function logEvenNumsToo(nums) {
    if (nums % 2 == 0) {
        for (let i = 0; i <= nums; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }
    } else return;

}

logEvenNumsToo(6);
logEvenNumsToo(12);
logEvenNumsToo(13);