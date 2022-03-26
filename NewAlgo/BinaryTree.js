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
const d = new Node(5)
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

 console.log(targetValueRecurrsive(a, 9))



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

console.log(sumRecurssive(a))
