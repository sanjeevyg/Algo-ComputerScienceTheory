
/* Strategy for dynamic problems -

1. Make it work 
- Visulize the problem as tree 
- implement the tree using recursion
- test it 

2. Make it efficient 
- add a memo object 
- add a base case to return memo values
- store return values into the memo
 */


function fib(n, memo = {}) {
 if(n in memo) return memo[n]
 if( n <= 2) return 1
 memo[n] =  fib(n - 1, memo) + fib(n - 2, memo)
 return memo[n]
}


function fibB(n) {
    let table = Array(n + 1).fill(0);
    table[1] = 1;

    for(let i = 0; i <= n; i++) {
        table[i + 1] += table[i]; 
        table[i + 2] += table[i];
    }
    return table[n]
}


console.log(fibB(7))
console.log(fib(50))


/* Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m * n? */


function travelGrid(m, n, memo = {}) {
    let key = m + ',' + n
    if(key in memo) return memo[key]

    if(m < 1 || n < 1) return 0; 
    if(m === 1 && n === 1) return 1; 

    memo[key] = travelGrid((m-1), n, memo) + travelGrid(m, (n-1), memo)
    return memo[key]
}

// console.log(travelGrid(0, 2))
// console.log(travelGrid(1, 2))
// console.log(travelGrid(2, 1))
// console.log(travelGrid(2, 2))
// console.log(travelGrid(2, 3))
// console.log(travelGrid(2, 4))
// console.log(travelGrid(3, 4))
// console.log(travelGrid(19, 19))


/* Write a function `canSum(targetSum, numbers)` that takes in a targetsum and an array of numbers as arguments.indexOf

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative.
 */

function canSum(targetSum, numbers, memo={}){
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0)  return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder =  targetSum - num
        if(canSum(remainder, numbers, memo) === true) {
            // memo[remainder] = true
            memo[targetSum] = true
            return true 
        }
    }

    memo[targetSum] = false
    return false;
}

// const arr1 = [ 3, 4]
// const arr2 = [3, 6, 7, 8]
// const arr3 = [3, 6, 7]

// console.log(canSum(7, [2, 3]))
// console.log(canSum(7, [2, 9]))
// console.log(canSum(100,arr2))
// console.log(canSum(1000, arr3))

/* Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. 
The function should return an array containing any combination of elements that add up to exactly the targeSum. 
If there is no combination that adds up to the targetSum, then return null.
If there are multiple combinations possible, you may return any single one. */


const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if(targetSum < 0 ) return null;
    
    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
        if(remainderResult != null ) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    
    memo[targetSum] = null
    return null
}


// console.log(howSum(7, [3, 4, 2, 5]))
// console.log(howSum(300, [2, 3, 5]))


/* Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. 

The function should return an array containing the shortest combintion of numbers tht add up to exactly the targetSum. 

If there is a tie for the shortest combination, you may return any one of the shortest.
 */


const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if(targetSum < 0 ) return null;

    let shortestCom = null
    
    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = bestSum(remainder, numbers, memo)
        if(remainderResult !== null ) {
            combination = [...remainderResult, num]
            if(shortestCom === null || combination.length < shortestCom.length ) {
                shortestCom = combination
            }
        }
    }
    memo[targetSum] = shortestCom
    return shortestCom
}


// console.log(bestSum(7, [2, 3]))
// console.log(bestSum(300, [2, 150, 5]))



/* Write a funciton `canConstruct(target, wordBank)` that accepts a target string and an array of strings. 

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` Array.

You may reuse elements of `wordBank` as many times a needed. */

const canConstruct = (targetString, wordBank, memo={}) => {
    if(targetString in memo) return memo[targetString];
    if(targetString === "") return true 
    
    for(let str of wordBank) {
        if(targetString.indexOf(str) === 0) {
            let suffix = targetString.slice(str.length) 
        if (canConstruct(suffix, wordBank, memo)) {
            memo[targetString] = true
            return memo[targetString]
        }
    }
    }
    memo[targetString] = false
    return false
}

let ar3 = ["ab", "abc", "cd", "def", "abcd"]
let ar4 = ["a", "p", "ent", "enter", "ot", "o", ]


// console.log(canConstruct("abcdef", ar3)) 
// console.log(canConstruct("enterapotentpot", ar4)) 
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 



/* Write a funciton `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may resue elements of `wordBank` as many times as needed.
*/


const countConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if( target === "") return 1;
    let count = 0;
    for(let str of wordBank){
        if(target.indexOf(str) === 0) {
            const numOfWay = countConstruct(target.slice(str.length), wordBank, memo)
            count += numOfWay;
        }
    }
    memo[target] = count
    return count
}


// console.log(countConstruct("abcdef", ar1)) 
// console.log(countConstruct("enterapotentpot", ar2)) 
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 

/* 
Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The funcion should return a 2D array containing all of the ways that the `target` can be contructed by concatenating elements of the `wordBank` array. Each element of the 2D
array should represent one combination that constructs the `target`.

You may resuse elements of `wordBank` as many time as needed.
*/

const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target] 
    
    if(target === "") return [[]];
    
    let combination = []
    
    for(let str of wordBank) {
        if(target.indexOf(str) === 0) {
            let suffix = target.slice(str.length)
            let suffixWays = allConstruct(suffix, wordBank, memo)
            let suffixAr = suffixWays.map(way => [str, ...way])
            combination.push(...suffixAr)
        }
    }
    memo[target] = combination
    return combination
}

/* let ar1 = ["ab", "abc", "cd", "def", "abcd"]
console.log(allConstruct("abcdef", ar1)) 
console.log(allConstruct("enterapotentpot", ar2)) 
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 
console.log(allConstruct("enterapotentpot", ar2))  */


// ......................................................................................................................

/* Tabulation Strategy:

- visulaize the problem as a tabel 
- size the table based on the inputs
- initialize the table with default values 
- seed the trivial answer into the table 
- iterate through the table 
- fill further positions based on the current position */

const newfib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    
    for(let i = 0; i <= n; i++){
        table[i + 1] += table[i];
        console.log("line 221", `count -> ${i}`, table[i + 1])
        table[i + 2] += table[i];
        console.log("line 223", `count -> ${i}`, table[i + 2])
    }
    return table[n]
}


/* Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travle to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m * n? */

const gridTraveler = (m, n) => {
    let table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))
    
    table[1][1] = 1
    
    for( let i= 0; i <=m; i++) {
        for(let j=0; j<=n; j++) {
            let current = table[i][j]
            if((i + 1) <= m) {table[i + 1][j] += current}
            if((j + 1) <= n) {table[i][j + 1] += current}
        }
    }
    return table[m][n]
}


// console.log(gridTraveler(3, 3))



/* Write a function `canSum(targetSum, numbers)` that takes in a targetsum and an array of numbers as arguments.indexOf

The function should return a boolean indicatig whether or not it is possible to generate the targetSum using numbers from the array.
You may use an element of the array as many times as needed.indexOf

You may assume that all input numbers are nonnegative.
 */


const canSumT = (targetSum, numbers) => {
    let table = Array(targetSum + 1)
    .fill(false)

    table[0] = true;

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] === true) {
            for(let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum]
}

// console.log(canSumT(7, [3, 4, 5]))

/* Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. 
The function should return an array containing any combination of elements that add up to exactly the targeSum. 
If there is no combination that adds up to the targetSum, then return null.
If there are multiple combinations possible, you may return any single one. */


const howSumT = (target, numbers) => {
    let table = Array(target + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= target; i++) {
        if(table[i] != null) {
            for(let num of numbers) {
                table[i + num] = [...table[i], num]
            }
        }
    }
    return table[target]
}


// console.log(howSumT(7, [2, 3, 3]))
// console.log(howSumT(5, [2, 1, 3]))


/* Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. 

The function should return an array containing the shortest combintion of numbers tht add up to exactly the targetSum. 

If there is a tie for the shortest combination, you may return any one of the shortest.
 */

const bestSumT = (target, numbers) => {
    let table = Array(target + 1).fill(null)
    table[0] = []

    for(let i = 0; i <= target; i++) {
         if(table[i] !== null) {
            for(let num of numbers) {
                const combination = [...table[i], num]
                if( !(table[i + num]) ||  table[i + num].length > combination.length) {
                    table[i + num] = combination
                }
            }
        }
    }
    return table[target]
}

// console.log(bestSumT(9, [2, 3, 5, 4, 7, 2]))



/* Write a funciton `canConstruct(target, wordBank)` that accepts a target string and an array of strings. 

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` Array.

You may reuse elements of `wordBank` as many times a needed. */

const canConstructT = (target, wordBank) => {
    let table = Array(target.length + 1).fill(false);

    table[0] = true;

    for(let i = 0; i <= target.length; i++) {
        if(table[i] === true) {
            for(let word of wordBank) {
                if(target.slice(i, (i + word.length)) === word) {
                    table[i + word.length] = true;
                }
            } 
        }
    }
  return table[target.length]
}






// console.log(canConstructT("abcdef", ar1)) 
// console.log(canConstructT("enterapotentpot", ar2)) 
// console.log(canConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 


/* Write a funciton `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You myay resue elements of `wordBank` as many times as needed.
*/


const countConstructT = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for(let i = 0; i <= target.length; i++) {
        if(table[i] !== 0) {
            for( let word of wordBank)
            if(target.slice(i, i + word.length) === word) {
                table[i + word.length] = table[i + word.length] + table[i]
            }
        }
    }
    return table[target.length]
}



let ar5 = ["ab", "abc", "cd", "def", "abcd"]
let ar6 = ["a", "p", "ent", "enter", "ot", "o", ]

// console.log(countConstructT("abcdef", ar5)) 
// console.log(countConstructT("enterapotentpot", ar6)) 
// console.log(countConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 


/* Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The funcion should return a 2D array containing all of the ways that the `target` can be contructed by concatenating elements of the `wordBank` array. Each element of the 2D
array should represent one combination that constructs the `target`.

You may resuse elements of `wordBank` as many time as needed. */

const allConstructT = (target, wordBank) => {
    let table =  Array(target.length + 1).fill().map(() => [])
    table[0] = [[]]

    for(let i = 0; i < target.length; i++) {
        if(table[i] !== null) {
            for(let word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    const combination = table[i].map(subarray => [...subarray, word])
                    table[i + word.length].push(...combination)
                }
            }
        } 
    }
    return table[target.length]
}


let ar1 = ["ab", "abc", "c", "cd", "def", "ef",  "abcd"]
let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]

// console.log(allConstructT("abcdef", ar1)) 
// console.log(allConstructT("enterapotentpot", ar2)) 
// console.log(allConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 
// console.log(allConstructT("enterapotentpot", ar2)) 