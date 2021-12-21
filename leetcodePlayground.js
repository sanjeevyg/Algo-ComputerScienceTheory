let array = require('./array.js') 
// console.log(array)

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



/* Best Time to Buy and Sell Stock

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
0 <= prices[i] <= 104 */

// var maxProfit = function(prices) {
//     return maxSale(element = 0, prices)
// };

// var maxSale = (element, prices) => {
//     if(element >= prices.length) return 0
//     let max = 0;
//     let profit = 0;
//     for(let i = 0; i < prices.length - 1; i++) {
//         profit = prices[i + 1 + element] - prices[element]
//         if(profit > max) max = profit
//     }
//     return Math.max(max, maxSale(element + 1, prices))
// }


// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit( array))

// var maxProfit = function(prices) {
//     let table = Array(prices.length + 1).fill(0)
//     table[0] = 0;
//     for(let i = 0; i < prices.length; i++ ) {
//         prices[i] > Math.max(...prices.slice(i + 1)) ?  table[i + 1] = 0 : table[i + 1] = Math.max(...prices.slice(i + 1)) - prices[i]   
//         if(table[i + 1] < table[i]) table[i + 1] = table[i] 
//     }

//     return table[prices.length]
// }


var maxProfit = function(prices) {
  let currentMax = 0;
  let maxSofar = 0;
  for(let i = 1; i < prices.length; i++) {
      currentMax = Math.max(0, currentMax + prices[i] - prices[i - 1])
      maxSofar = Math.max(maxSofar, currentMax)
  }
  return maxSofar
}




// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit(array)) 
// console.log(maxProfit( array))


/* Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */

var maxSubArray = function(nums) {
    // if(nums.length === 1) return nums[0];
    let currentMax = nums[0];
    let maxSofar = nums[0];
    for(let i = 1; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i])
        maxSofar = Math.max(maxSofar, currentMax)
    }
    return maxSofar
};

/* console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6
console.log(maxSubArray([5,4,-1,7,8])) //23
console.log(maxSubArray([1])) //1
console.log(maxSubArray([-2,-1])) //-1
console.log(maxSubArray([-1,-2])) // -1
console.log(maxSubArray([5,4,-1,7,8])) //23 */




var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let maxSum = Math.max(nums[nums.length -1], maxSubArray(nums.slice(0, nums.length - 1)) + nums[nums.length -1], nums[nums.length -2] )
    return maxSum
};

/* console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6
console.log(maxSubArray([5,4,-1,7,8])) //23
console.log(maxSubArray([1])) //1
console.log(maxSubArray([-2,-1])) //-1
console.log(maxSubArray([-1,-2])) // -1
console.log(maxSubArray([5,4,-1,7,8])) //23 */



/* All Possible Full Binary Trees

Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Input: n = 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Example 2:

Input: n = 3
Output: [[0,0,0]]
 

Constraints:

1 <= n <= 20 */




function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var allPossibleFBT = function(n) {
    if(n % 2 === 0) return [];
   
    if(n === 1) return [new TreeNode(0)]
    let tree = [];
    for(let i = 1; i <= n - 2; i += 2 ) {
        let leftTree = allPossibleFBT(i)
        let rightTree = allPossibleFBT(n - 1 - i) 
        leftTree.forEach(lt => {
            rightTree.forEach(rt => {
                let root = new TreeNode(0)
                root.left = lt
                root.right = rt
                tree.push(root)
            })
        })
    }
    return tree
 }

    // let leftNode = node.left
    // let rightNode = node.right
    // if(leftNode.val === 0) {
    //     rightNode = allPossibleFBT(n - 2)
    // } else if(rightNode.val === 0) {
    //     leftNode = allPossibleFBT(n - 2)
    // }
  
    // return node
    

// console.log(allPossibleFBT(7))
// console.log(allPossibleFBT(5))


// const randomElement = array[Math.floor(Math.random() * array.length)];


/* Count Square Submatrices with All Ones

Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
Example 2:

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.
 

Constraints:

1 <= arr.length <= 300
1 <= arr[0].length <= 300
0 <= arr[i][j] <= 1 */


var countSquares = function(matrix) {
    let m = matrix.length 
    let n = matrix[0].length
    if (m < 1) return 0
    let count = 0

    for(let i = 0; i < m; i++) { 
        for(let j=0; j < n; j++) {
            if(matrix[i][j] === 1 && i > 0 && j > 0)  {
                matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1])
            }
            count += matrix[i][j]
        }
    }
    return count
};




// console.log(countSquares([
//     [0,1,1,1],
//     [1,1,1,1],
//     [0,1,1,1]
// ]))


// console.log(countSquares([
//     [1, 1]
// ]))

// console.log(countSquares([
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]))


/* 
House Robbr 
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400


*/

var rob = function(nums) {

    let table = Array(nums.length).fill(0)
    table[0] = nums[0]
    table[1] = nums[1]
    for(let i = 0; i <= nums.length; i++) {
        if(i + 2 <= nums.length - 1) {
        table[i + 2] += Math.max(table[i] + nums[i + 2], table[i + 2])
       
        console.log(table[i + 2])
        }
        
    
        // if(i + 3 <= nums.length - 1) {
        // table[i + 3] += Math.max(table[i] + nums[i + 3], table[i + 3])
        // }
    }
    return table
};

console.log(rob([2,7,9,3,1]))
console.log(rob([1,3,1,3,100]))