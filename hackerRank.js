// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to the power -4 are acceptable.

let array = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let s = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for(let element of arr) {
        if (element > 0) positive++ 
        if (element < 0) negative++ 
        if (element == 0) zero++ 
    }
    console.log(positive/s)
    console.log(negative/s)
    console.log(zero/s)
}
 

// plusMinus(array)

let arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    let sum = arr.reduce((sum, element) => sum + element)
    let sortedArr = arr.sort((a, b) => a - b)
    let maxSum = sum - sortedArr[0]
    let minSum = sum - sortedArr[sortedArr.length - 1]
    console.log(`${minSum} ${maxSum}`)   
}


// miniMaxSum(arr)

let str = "12:45:54PM"

function timeConversion(s) {
    let arr = s.split("");
    
    // let militaryTime;
    let hour = parseInt(s.substring(0, 2));
        
    if(arr.includes("P")) {
        if (hour > 12 || hour == 12) return arr.splice(0, arr.length - 2).join("")
        let militaryHour = String(hour + 12)
        let militaryTime = `${militaryHour}${arr.splice(2, arr.length - 4).join("")}`
        return militaryTime
    }



    let militaryHour  = s.substring(0, 2)
    if (hour > 12 || hour == 12) {militaryHour = "0" + String(hour - 12)}
    let militaryTime = `${militaryHour}${arr.splice(2, arr.length - 4).join("")}`

    return militaryTime
}

// console.log(timeConversion(str))

let a = [0, 0, 1, 2, 1]
// let a = [0, 0]
function lonelyinteger(a) {
    let arr = a;
    let count = 0;

    let array = []
    for(let e of a) {
        if(arr.includes(e)) {
            array.push(arr.indexOf(e))
        }
        arr.splice(arr.indexOf(e), arr.indexOf(e) + 1)
    }
    return array
}

console.log(lonelyinteger(a))