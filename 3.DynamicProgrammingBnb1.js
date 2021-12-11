
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

console.log(travelGrid(0, 2))
console.log(travelGrid(1, 2))
console.log(travelGrid(2, 1))
console.log(travelGrid(2, 2))
console.log(travelGrid(2, 3))
console.log(travelGrid(2, 4))
console.log(travelGrid(3, 4))
console.log(travelGrid(19, 19))