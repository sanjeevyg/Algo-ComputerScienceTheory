// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to the power -4 are acceptable.

let array = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let s = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for(let element of arr) {
        if (element > 0) { positive++ }
        if (element < 0) { negative++ }
        if (element == 0) { zero++ }
    }
    console.log(positive/s)
    console.log(negative/s)
    console.log(zero/s)
 }
 

 plusMinus(array)
