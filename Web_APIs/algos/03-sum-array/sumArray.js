function sumArray(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum;
};

var testArray = [3, 1, 5, 6, 21, 2];

console.log(sumArray(testArray));