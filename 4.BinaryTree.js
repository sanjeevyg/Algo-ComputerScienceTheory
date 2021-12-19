
// depth first-values;
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if (root === null) return [];
    const result = [];
    const stack = [ root ]; 
    while(stack.length > 0) {
        const current = stack.pop()
        // console.log(current.val);
        result.push(current.val)

        if (current.right) stack.push(current.right); 
        if (current.left) stack.push(current.left);
    }
    return result  
}

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

const a = new Node(2)
const b = new Node(5)
const c = new Node(7)
const d = new Node(9)
const e = new Node(12)
const f = new Node(14)

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

 console.log(depthFirstValues(a))


 const depthFirstValues2nd = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstValues2nd(root.left) 
    const rightValues = depthFirstValues2nd(root.right) 
    return [root.val, ...leftValues, ...rightValues]
 }


 //breath-first-values : 


 const breadthFirstValues = ( root ) => {
     let result = [];
     if(root === null) return []
     let queue = [root];
     while(queue.length > 0) {
         const current = queue.shift()
         result.push(current.val)
         if(current.left) queue.push(current.left)
         if(current.right) queue.push(current.right)
     }
     return result
     
 }

//  console.log(breadthFirstValues(a))


 const treeIncludes = (target, root) => {
     if(root === null) return false
     let queue = [root]
     while(queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) return true
        if(current.left) queue.push(current.left) 
        if(current.right) queue.push(current.right) 
     }
     return false
 }

//  console.log(treeIncludes("e", a))


 const treeIncludesRecursieveMethod = (target, root) => {
     if(root === null) return false;
     if(root.val === target) return true;
     return treeIncludesRecursieveMethod(target, root.left) || treeIncludesRecursieveMethod(target, root.right)
 }

//  console.log(treeIncludesRecursieveMethod("e", a))


 const sum = (root) => {
     if(root === null) return 0;
     return ( root.val + sum(root.left) + sum(root.right))
 }

 
 const sumA = (root) => {
     if(root === null) return 0;
     let queue = [root];
     let sum = 0;
     while(queue.length > 0) {
         const current = queue.shift()
         sum += current.val
         if(current.left) queue.push(current.left)
         if(current.right) queue.push(current.right)
        }
        
        return sum 
   }
    
    
   
   const sumB = (root) => {
       if(root === null) return 0;
       let stack = [root];
       let sum = 0;
       while(stack.length > 0) {
           const current = stack.pop()
           sum += current.val
           if(current.right) stack.push(current.right)
           if(current.left) stack.push(current.left)
        }
        
        return sum 
    }
    
    console.log(sumB(a))


    const minV = (root) => {
        if(root === null) return Infinity;
        let smallest = Infinity;
        let stack = [root];
        while(stack.length > 0) {
            const current = stack.pop()
            // console.log(current)
            if(current.val < smallest) smallest = current.val;
            if(current.right) stack.push(current.right);
            if(current.left) stack.push(current.left);
        }
        return smallest
    }
    // console.log("line 155", minV(a))
    
    const minVR = (root) => {
        if(root === null) return Infinity;
        return Math.min(root.val, minVR(root.left), minVR(root.right))
    }
    
    // console.log("line 160", minVR(a))


    const maxPathSum = (root) => {
        if(root === null) return -Infinity;
        if(root.left === null && root.right === null) return root.val
        const largest = Math.max(maxPathSum(root.left), maxPathSum(root.right))
        return root.val + largest
    }
    console.log(maxPathSum(a)) 