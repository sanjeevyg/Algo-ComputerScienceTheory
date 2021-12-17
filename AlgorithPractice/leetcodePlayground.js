var tribonacci = function(n) {
    let table = Array(n + 1).fill(0)
    table[0] = 0
    table[1] = 1

    for( let i = 0; i <= n; i++) {
        
        table[i+3] = table[i+3] + table[i];
        table[i+2] = table[i+2] + table[i];
        table[i+1] = table[i+1] + table[i];
    }
    return table[n]
};

// console.log(tribonacci(25))

/* 

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]] */


var generate = function(numRows, memo={}) {
    if(numRows in memo) return memo[numRows]
    if(numRows === 1) return [[1]]

    let newRow = [];

    let rows= generate(numRows - 1, memo)
    let lastRow = rows[rows.length - 1]

    for(let j = 0; j < lastRow.length - 1; j++) {
        let element = lastRow[j] + lastRow[j + 1]
        newRow.push(element)
    }
    newRow.unshift(1)
    newRow.push(1)
    rows.push(newRow) 
    let result = rows
    memo[numRows] = result
    return rows
}
  
  
// console.log(generate(5))

/* 119. Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1] */

var getRow = function(rowIndex, memo={}) {
    if(rowIndex in memo) return memo[rowIndex]
    if(rowIndex === 0) return [1]
    let lastRow = getRow(rowIndex - 1)
    let newRow = []
    for(let i = 0; i < lastRow.length - 1; i++) {
        let element = lastRow[i] + lastRow[i + 1]
        newRow.push(element)
    }
    newRow.unshift(1)
    newRow.push(1)
    memo[rowIndex] = newRow
    return newRow
};


// console.log(getRow(5))


/* Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

 

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
 

Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999 */

// var minCostClimbingStairs = function(cost) {
//     if(cost.length === 1) return cost[0];
//     if(cost.length === 2) return null
 
//     let minCost = null
//     const cost1 = minCostClimbingStairs(cost.slice(0, cost.length - 1))
//     const cost2 = minCostClimbingStairs(cost.slice(0, cost.length - 2))
    
//     minCost = Math.min(cost1, cost2)

//     minCost = minCost + cost[cost.length - 1]
//     return minCost
// };

// console.log(minCostClimbingStairs([10, 15, 20]))
// console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))  


var minCostClimbingStairs = function(cost) {  
  return Math.min(calculateCost(step = 0, cost), calculateCost(step = 1, cost))
};

let calculateCost = (step, cost, memo={}) => {
    if(step in memo) return memo[step]
    if(step >= cost.length) {
        return 0
    }
    memo[step] = cost[step] + Math.min(calculateCost(step + 1, cost, memo), calculateCost(step + 2, cost, memo))
    return memo[step]
}

// console.log(minCostClimbingStairs([10, 15, 20]))
// console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1,5,9]))  

121. Best Time to Buy and Sell Stock
Easy

12525

454

Add to List

Share
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104