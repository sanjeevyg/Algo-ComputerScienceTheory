
function fib(n, memo={}) {
    if(n in memo) return memo[n]
    if(n <= 2) return 1;

    if(n !== null) result = fib(n-2, memo) + fib(n-1, memo)

    memo[n] = result
    return result
}


function fib(n) {
    let table = Array(n + 1).fill(0)
    table[1] = 1;

    for(let i = 0; i < n; i++) {
        table[i + 1] = table[i + 1] + table[i]  
        table[i + 2] = table[i + 2] + table[i]  
    }
    return table[n]
}


// console.log(fib(7))
// console.log(fib(50))

/* Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m * n? */


// function travelGrid(m, n, memo={}) {
//    let key = m + ',' + n;
//    if( key in memo) return memo[key]

//    if( m < 1 || n < 1) return 0;
//    if( m === 1 && n === 1 ) return 1;

//    memo[key] = travelGrid(m - 1, n, memo) + travelGrid(m, n - 1, memo)
//   return memo[key]
// }

// console.log(travelGrid(0, 2))
// console.log(travelGrid(1, 2))
// console.log(travelGrid(2, 1))
// console.log(travelGrid(2, 2))
// console.log(travelGrid(2, 3))
// console.log(travelGrid(2, 4))
// console.log(travelGrid(3, 4))
// console.log(travelGrid(19, 19))




// function travelGrid(m, n) {
//     let table = Array(m + 1)
//     .fill()
//     .map(() => Array(n + 1).fill(0))
//     table[1][1] = 1;
//     for(let i = 0; i <= m; i++) {
//         for(let j = 0; j <= n; j++) {
//            if(i + 1 <= m) table[i + 1][j] += table[i][j]
//            if(j + 1 <= n) table[i][j + 1] += table[i][j]
//     }
//   } 
//   return table[m][n]
// }


// console.log(travelGrid(4, 4))
// console.log(travelGrid(1, 2))
// console.log(travelGrid(2, 1))
// console.log(travelGrid(2, 2))
// console.log(travelGrid(2, 3))
// console.log(travelGrid(2, 4))
// console.log(travelGrid(3, 4))
// console.log(travelGrid(19, 19))



/* Write a function `canSum(targetSum, numbers)` that takes in a targetsum and an array of numbers as arguments.indexOf

The function should return a boolean indicatig whether or not it is possible to generate the targetSum using numbers from the array.
You may use an element of the array as many times as needed.indexOf

You may assume that all input numbers are nonnegative.
 */


// const canSum = (targetSum, numbers, memo={}) => {
//     if(targetSum in memo) return memo[targetSum]
//     if(targetSum === 0) return true;
//     if(targetSum < 0) return false;
//     for(let num of numbers) {
//          const remainder = targetSum - num;
//          if(canSum(remainder, numbers, memo) === true) {
//              memo[targetSum] = true
//              return true
//          }
//     }
//     memo[targetSum] = false
//     return false
// }

// const canSum = (targetSum, numbers) => {
//    let table = Array(targetSum + 1).fill(false)
   
//    table[0] = true;
//   for(let i = 0; i < targetSum; i++) {
//    for( let num of numbers) {
//            if(table[i] === true) {
//                 table[i + num] = true
//            }
//        }
//    }
//    return table[targetSum]
// }


// console.log(canSum(7, [3, 4]))
// console.log(canSum(1010, [3, 4, 5, 1]))

// const howSumT = (target, numbers, memo={}) => {
//     if(target in memo) return memo[target]
//     if(target === 0) return [];
//     if(target < 0) return null
//     for(let num of numbers) {
//         const remainder = target - num;
//         let result = howSumT(remainder, numbers, memo)
//         if(result !== null) {
//             memo[target] = [...result, num]
//             return memo[target]
//         }
//     }
//     memo[target] = null
//     return null   
// }


// console.log(howSumT(7, [3, 4, 2, 5]))
// console.log(howSumT(300, [2, 3, 5]))

// const howSumT = (target, numbers) => {
//     let table = Array(target + 1).fill(null)
//     table[0] = [];
//     for(let num of numbers) {
//         for(let i = 0; i <= target; i ++) {
//             if(table[i] !== null) {
//                 table[i + num] = [num, ...table[i]]
//             }
//         }
//     }
//     return table[target]
// }


// console.log(howSumT(7, [3, 4, 2, 5, 7]))
// console.log(howSumT(300, [2, 3, 5]))


/* Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. 

The function should return an array containing the shortest combintion of numbers tht add up to exactly the targetSum. 

If there is a tie for the shortest combination, you may return any one of the shortest.
 */

// const bestSumT = (target, numbers, memo={}) => {
//   if(target in memo) return memo[target]
//   if(target === 0) return [];
//   if(target < 0) return null;
//   let bestSum = null
//   for(let num of numbers) {
//       const remainder = target - num;
//       const remainderAr = bestSumT(remainder, numbers, memo);
//       if(remainderAr !== null) {
//           const current = [num, ...remainderAr]
//           if(bestSum === null || bestSum.length < current.length) {
//               bestSum = current 
//           }
//       }
//   }
//   memo[target] = bestSum;
//   return bestSum
// }

// console.log(bestSumT(9, [2, 3, 5, 4, 7, 2]))

/* const bestSumT = (target, numbers) => {
    let table = Array(target + 1).fill(null)
    table[0] = [];
    

    for(let i = 0; i <= target; i++) {
        if(table[i] !== null)  {
            for(let num of numbers) {
                const shortest = [num, ...table[i]]
                if( !table[i + num] || table[i + num].length > shortest.length) {
                    table[i + num] = shortest
                }
            }
        }
    }
 return table[target]
}
  
  console.log(bestSumT(9, [2, 3, 5, 4, 7, 2]))
 */



/* Write a funciton `canConstruct(target, wordBank)` that accepts a target string and an array of strings. 

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` Array.

You may reuse elements of `wordBank` as many times a needed. */

/* const canConstructT = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if(target === "") return true
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if(canConstructT(suffix, wordBank, memo)) {
                memo[target] = true;
                return memo[target]
            }
        }
    }
    memo[target] = false
    return false
}

let ar1 = ["ab", "abc", "cd", "def", "abcd"]
let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]


console.log(canConstructT("abcdef", ar1)) 
console.log(canConstructT("enterapotentpot", ar2)) 
console.log(canConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 
 */



// const canConstructT = (target, wordBank) => {
//     let table = Array(target.length + 1).fill(false)
//     table[0] = true;

//     for(let i = 0; i <= target.length; i++) {
//         if(table[i] === true) {
//         for(let word of wordBank) {
//             if(target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = true
//                 }
//             }
//         }
//     }
//     return table[target.length]
    
// }



// let ar1 = ["ab", "abc", "cd", "def", "abcd"]
// let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]


// console.log(canConstructT("abcdef", ar1)) 
// console.log(canConstructT("enterapotentpot", ar2)) 
// console.log(canConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 



/* Write a funciton `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You myay resue elements of `wordBank` as many times as needed.
*/


// const countConstructT = (target, wordBank) => {

   
// }


// let ar1 = ["ab", "abc", "cd", "def", "abcd"]
// let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]

// console.log(countConstructT("abcdef", ar1)) 
// console.log(countConstructT("enterapotentpot", ar2)) 
// console.log(countConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 

/* Write a funciton `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may resue elements of `wordBank` as many times as needed.
*/


// const countConstructT = (target, wordBank) => {
//     let table = Array(target.length + 1).fill(0)

//     table[0] = true
    
//     for( let i = 0; i <= target.length; i++) {
//         if(table[i] !== 0) {
//             for( let word of wordBank) {
//                 if(target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = table[i + word.length] + table[i]
//                 }
//             }
//         }
//     }
//    return  table[target.length]
// }



// let ar1 = ["ab", "abc", "cd", "def", "abcd"]
// let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]

// console.log(countConstructT("abcdef", ar1)) 
// console.log(countConstructT("enterapotentpot", ar2)) 
// console.log(countConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 


/* const countConstructT = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if(target === "") return 1;
    let count = 0;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const noOfWays = countConstructT(suffix, wordBank, memo)
            count += noOfWays
        }
    }
    memo[target] = count
    return count
}



let ar1 = ["ab", "abc", "cd", "def", "abcd"]
let ar2 = ["a", "p", "ent", "enter", "ot", "o", ]

console.log(countConstructT("abcdef", ar1)) 
console.log(countConstructT("enterapotentpot", ar2)) 
console.log(countConstructT("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"]))  */


/* 
Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The funcion should return a 2D array containing all of the ways that the `target` can be contructed by concatenating elements of the `wordBank` array. Each element of the 2D
array should represent one combination that constructs the `target`.

You may resuse elements of `wordBank` as many time as needed.
*/

// const allConstruct = (target, wordBank) => {
//     let table = Array(target.length + 1).fill().map(() => [])
//     table[0] = [[]]

//     for(let i = 0; i <= target.length; i++) {
//         if(table[i] !== null) {
//             for(let word of wordBank) {
    
//                 if(target.slice(i, i + word.length) === word) {
//                     const ways = table[i].map(way => [word, ...way])
//                     table[i + word.length] = [...table[i + word.length], ...ways]
//                 }
//             }
//         }
//     }

//     return table[target.length]
  
// }

// let ar1 = ["ab", "abc", "e", "cd", "def", "c", "abcd"]
// console.log(allConstruct("abcdef", ar1)) 
// console.log(allConstruct("enterapotentpot", ar2)) 
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 
// console.log(allConstruct("enterapotentpot", ar2)) 



const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo)  memo[target]
    if(target === "") return [[]];

    let result = []
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const noOfWays = allConstruct(suffix, wordBank, memo)
            const allWays = noOfWays.map(way => [...way, word])
            result.push(...allWays)
        }
    }
    memo[target] = result
    return result
}

let ar1 = ["ab", "abc", "e", "cd", "def", "c", "abcd"]
console.log(allConstruct("abcdef", ar1)) 
// console.log(allConstruct("enterapotentpot", ar2)) 
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeez", ["e", "ee", "eee", "eeee", "eeeeee"])) 
// console.log(allConstruct("enterapotentpot", ar2)) 

