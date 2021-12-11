
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


// console.log(fib(7))
// console.log(fib(50))

function travelGrid(m, n, memo = {}) {
    let key = m + ',' + n
    if(key in memo) return memo[key]

    if(m < 1 || n < 1) return 0; 
    if(m === 1 && n === 1) return 1; 

    memo[key] = travelGrid((m-1), n, memo) + travelGrid(m, (n-1), memo)
    return memo[key]
}

/* console.log(travelGrid(0, 2))
console.log(travelGrid(1, 2))
console.log(travelGrid(2, 1))
console.log(travelGrid(2, 2))
console.log(travelGrid(2, 3))
console.log(travelGrid(2, 4))
console.log(travelGrid(3, 4))
console.log(travelGrid(19, 19)) */

function canSum(targetSum, numbers, memo={}){
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0)  return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder =  targetSum - num
        if(canSum(remainder, numbers, memo) === true) {
        memo[targetSum] = true
        return true 
        }
    }

    memo[targetSum] = false
    return false;
}

const arr1 = [ 3, 4]
const arr2 = [3, 6, 7, 8]
const arr3 = [3, 6, 7]

/* console.log(canSum(7, [2, 3]))
console.log(canSum(100,arr2))
console.log(canSum(1000, arr3)) */


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



const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if(targetSum < 0 ) return null;
    let shortestCom = null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = bestSum(remainder, numbers, memo)
        if(remainderResult != null ) {
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

// let ar1 = ["ab", "abc", "cd", "def", "abcd"]
// let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]


// console.log(canConstruct("abcdef", ar1)) 
// console.log(canConstruct("enterapotentpot", ar2)) 
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 



/* Write a funciton `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You myay resue elements of `wordBank` as many times as needed.
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

let ar1 = ["ab", "abc", "cd", "def", "abcd"]
console.log(allConstruct("abcdef", ar1)) 
// console.log(allConstruct("enterapotentpot", ar2)) 
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 
// console.log(allConstruct("enterapotentpot", ar2)) 