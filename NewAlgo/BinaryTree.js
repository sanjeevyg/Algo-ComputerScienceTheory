/* - At most two children per node
- Exactly one root note
å- exactly one path b/w root and any node */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(4)
const d = new Node(1)
const e = new Node(7)
const f = new Node(9)


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function depthFirstSearch(root) {
   if(root === null) return [];

   const result = [];
   const stack = [root];
   while(stack.length > 0) {
       const current = stack.pop()
       result.push(current.val)

    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
   }

   return result;
}


function depthFirstSearchR(root) {
    if(root === null) return [];
    const left = depthFirstSearch(root.left)
    const right = depthFirstSearch(root.right)
    return [root.val, ...left, ...right ]
}

// console.log(depthFirstSearchR(a))

function breadthFirstValues(root) {
    if( root === null ) return [];
    let queue = [ root ];
    let result = [];

    while(queue.length > 0) {
        let current = queue.shift();
        result.push(current.val)
        
        if(current.left != null) queue.push(current.left)
        if(current.right != null) queue.push(current.right)
    }
    return result
}

// console.log(breadthFirstValues(a))


function targetValue(root, value) {
    if(root === null) return false;

    let stack = [ root ];
    while(stack.length > 0) {
        let current = stack.pop()

        if(current.val === value) return true;

        if(current.right != null) stack.push(current.right)
        if(current.left != null) stack.push(current.left)
    }

    return false
 }


 function targetValueB(root, value) {
    if(root === null) return false;

    let queue = [ root ];
    while(queue.length > 0) {
        let current = queue.shift()

        if(current.val === value) return true;

        if(current.left != null) queue.push(current.left)
        if(current.right != null) queue.push(current.right)
    }

    return false
 }

//  console.log(targetValueB(a, "e"))



 function targetValueRecurrsive(root, value) {
     if(root === null) return false;
     if(root.val === value) return true;
    return targetValueRecurrsive(root.left, value) || targetValueRecurrsive(root.right, value)
   
 } 

//  console.log(targetValueRecurrsive(a, 9))



function sum(root) {
    let sum = 0;
    let queue = [root]
    while(queue.length > 0) {
        const current = queue.shift();
        sum += current.val
        if(current.left != null) queue.push(current.left)
        if(current.right != null) queue.push(current.right)
    }
    return sum
} 

// console.log(sum(a))

function sumRecurssive(root) {
    if(root === null) return 0;
    return root.val + sumRecurssive(root.left) + sumRecurssive(root.right)
} 

// console.log(sumRecurssive(a))


function min(root) {
    let queue = [root];
    let min = Infinity
    while(queue.length > 0) {
        const current = queue.shift()
        if(min > current.val) min = current.val
        if(current.left != null) queue.push(current.left) 
        if(current.right != null) queue.push(current.right) 
    }
    return min
}


function minR(root) {
    if(root === null) return Infinity
    const value = root.val
    return Math.min(value, minR(root.left), minR(root.right))
}


// console.log(min(a))
// console.log(minR(a))

function maxPathSum(root) {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val
    const value = root.val
    const max = Math.max(maxPathSum(root.left), maxPathSum(root.right))
    return value + max
}

// console.log(maxPathSum(a))

/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

let nums = [-1,0,3,5,9,12]
let target = 9

var search = function(nums, target) {
    const startIndex = 0;
    const endIndex = nums.length - 1
    return searchTarget(nums, startIndex, endIndex, target)
};

function searchTarget(nums, startIndex, endIndex, target) {
    if(startIndex > endIndex) return -1
    const midPointIndex = Math.floor((startIndex + endIndex)/2)
    
    if(nums[midPointIndex] === target) return midPointIndex

    if(nums[midPointIndex] > target) return searchTarget(nums, startIndex, midPointIndex - 1, target)
    if(nums[midPointIndex] < target) return searchTarget(nums, midPointIndex + 1, endIndex, target)
}


// console.log(search(nums, 9))

var searchA = function(nums, target) {
    let start = 0;
    let end = nums.length;
    while(start <= end) {
        const mid = Math.floor((start + end)/2)
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) {
            start = 0;
            end = mid - 1;
        } else {
            start = mid + 1;
            end = nums.length;
        }
    }
    return -1
};

console.log(searchA(nums, 9))



/* 94. Binary Tree Inorder Traversal

Share
Given the root of a binary tree, return the inorder traversal of its nodes' values. */

var inorderTraversal = function(root) {
    let stack = []
    let curr = root;
    let res = [];
    while (curr != null || stack.length > 0) {
        if(curr != null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right;
        }
    }
    return res
}

console.log(inorderTraversal(a))