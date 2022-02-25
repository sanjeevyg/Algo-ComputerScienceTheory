// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to the power -4 are acceptable.

// let array = [-4, 3, -9, 0, 4, 1]

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

// let arr = [1, 2, 3, 4, 5]

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

// let a = [0, 0, 1, 2, 1]

function lonelyinteger(a) {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(a[i] === a[j]) count++
        }
        if(count < 2) return a[i]
        count = 0
    }
}

// console.log(lonelyinteger(a))

// let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

function diagonalDifference(arr) {
    let dSumFirst = 0;
    let dSumSecond = 0;

    for(let i=0; i < arr.length; i++) {
        dSumFirst += arr[i][i]
        dSumSecond += arr[i][[arr.length - 1] - i]
    }

    let result = dSumFirst - dSumSecond
    if (result < 0) result = (-1)*result

    return result
}
// console.log(diagonalDifference(arr))

// let array = [1, 1, 3, 2, 1]

function countingSort(arr) {
    let indexArray = new Array(100).fill(0)

    for(let element of arr) {
       indexArray[element]++ 
    }
    return indexArray
}

// console.log(countingSort(array))
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let a = new Node(1);
let b = new Node(2);
let c = new Node(5);
let d = new Node(7);
let e = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


const printNodes = (head) => {
    let current = head
    while(current != null) {
        console.log(current.val)
        current = current.next
    }
}

const printNodesRecurrsive = (head) => {
    if(head === null) return;
    console.log(head.val);
    printNodes(head.next)
}

// printNodes(a)
// printNodesRecurrsive(a)


const printValues = (head) => {
    let values = [];
    let current = head;
    while(current != null) {
        values.push(current.val)
        current = current.next
    }
    return values
}


const printValuesRecurssive = (head) => {
    let values = [];
    let current = head;
    helperMethod(current, values)
    return values
}

const helperMethod = (current, values) => {
    if(current === null) return;
    values.push(current.val)
    helperMethod(current.next, values)
}

// console.log(printValues(a))
// console.log(printValuesRecurssive(a))

const sum = (head) => {
    let sum = 0;
    let current = head;
    while(current != null) {
        sum += current.val
        current = current.next
    }
    return sum
}

const sumRecurrsive = (head) => {
    if(head === null) return 0;
    return head.val + sumRecurrsive(head.next)
}

// console.log(sum(a))
// console.log(sumRecurrsive(a))


const findTarget = (head, target) => {
    let current = head;
    while(current != null) {
        if(current.val === target) return true
        current = current.next
    }
    return false
}

const findTargetRecurrsive = (head, target) => {
    if(head === null) return false 
    if(head.val === target) return true 
    return findTargetRecurrsive(head.next, target)
}



// console.log(findTarget(a, 7))
// console.log(findTargetRecurrsive(a, 15))

const findValueAtIndex = (head, index) => {
    let current = head;
    let count = 0;
    while(current != null) {
        if(count === index) return current.val
        current = current.next
        count++
    }
    return null
}

const findValueAtIndexRecurrsive = (head, index) => {
    if(head === null) return null
    if(index === 0) return head.val 
    index = index - 1
    return findValueAtIndex(head.next, index)
}

// console.log(findValueAtIndex(a, 2))
// console.log(findValueAtIndexRecurrsive(a, 2))

const reverseTheLinkedList = (head) => {
    let current = head;
    let prev = null;
    while(current != null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const reverseTheLinkedListRecurssive = (head, prev = null) => {
    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseTheLinkedListRecurssive(next, head)
}

//    N <- A  <- B  <-  C  <-  D     N
//                             P     C    
// console.log(reverseTheLinkedList(a))
console.log(reverseTheLinkedListRecurssive(a))


const printNodes = (head) => {
    let current = head
    while(current != null) {
        console.log(current.val)
        current = current.next
    }
}

const printNodesRecurrsive = (head) => {
    if(head === null) return;
    console.log(head.val);
    printNodes(head.next)
}


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
 
