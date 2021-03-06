/* 1. Binary Search Algorithm – Iterative and Recursive Implementation
Find if an arry has a the target value! */

const arr = [2, 3, 5, 7, 9, 11, 15]
const target = 9
//Assume the starting index is 0 and the last index is n - 1. 
//Find the middle. 
//If target value is equal to middle value, return index. 
//If target value is less than middle value, disregard the right side and the middle value. The new starting index is 0 and the last index is mid - 1. 
//If target value is more than middle value, disregard the left side and the middle value. The new starting index is mid + 1 and the last index is n - 1. 

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1     

    while(start <= end) {
        let mid = Math.floor((start + end)/2)

        if(target == arr[mid])  {
            return mid
        } else if (target < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1;
        }
    }
    return "Target does not exist in array."
}

// console.log(binarySearch(arr, target))


function binarySearchRecurssive(arr, start, end, target) {
    if (start > end) return "Target is not in a array"
    let mid = Math.floor((start + end)/2)
    if(target == arr[mid]) return mid
    
    if(target < arr[mid]) { 
        return binarySearchRecurssive(arr, start, mid - 1 , target) 
    } else {
       return  binarySearchRecurssive(arr, mid + 1, end, target)
    }
}


let start = 0;
let end = arr.length - 1

// console.log(binarySearchRecurssive(arr, start, end, target))



const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]


function breadthFirstSearch(edges, src) {
    //Make a graph from edges
    let visited = new Set();
    const graph = buildGraph(edges);
    //Use queue to print current node value
    let queue = [src];
    
    //Use for loop to iterate through the nodes
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current)
        if(!visited.has(current)) visited.add(current)
        for(let node in graph) {
            for(let neighbor of graph[node]) {
                if(!visited.has(neighbor)) {
                    queue.push(neighbor)
                    visited.add(neighbor)
                }
            }
        }
    }
}


const buildGraph = (edges) => {
    let graph = {};
    //Use for loop to get the individual element in edges and destructure it 
    for(let edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[a].push(a)
    }
    return graph
}

// breadthFirstSearch(edges, 'i')



function depthFirstSearch(edges, src) {
   const graph = buildGraphD(edges);
   const visited = new Set();
   let stack = [src];

   while(stack.length > 0) {
       const current = stack.pop()
       console.log(current)
       if(!visited.has(current)) visited.add(current)

       for(let node in graph) {
           for(let neighbor of graph[node]) {
               if(!visited.has(neighbor)) {
                   stack.push(neighbor);
                   visited.add(neighbor)
               }
           }
       }
   }
}

const buildGraphD = (edges) => {
    let graph = {};
    for(let edge of edges) {
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph
}



// (depthFirstSearch(edges, 'i'))

function depthFirstSearchR(edges, src) {
    const graph = buildGraphD(edges);
    const visited = new Set();
    return explore(graph, src, visited);
 }

 const explore = (graph, src, visited) => {
     if(!visited.has(src)) {
         console.log(src)
         visited.add(src)
     }
    //  console.log(graph)

     for(let node in graph) {
        for(let neighbor of graph[node])
            if(!visited.has(neighbor)) {
                explore(graph, neighbor, visited)
            }
     }
 }

//  depthFirstSearchR(edges, 'i')


//Method 1 - Swapping
function quickSort(array, left = 0, right = array.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1)
    }
    return array
}

const pivot = (array, start = 0, end = array.length - 1) => {
    let pivot = array[start];
    
    let swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]]
    }
    
    let swapIndex = start;
    
    for(let i = start + 1; i < array.length; i++) {
        if(pivot > array[i]) {
            swapIndex++
            swap(array, i, swapIndex)
        }
    }
    swap(array, start, swapIndex)
    
    return swapIndex
}


// console.log(quickSort([7, -2, 4, 1, 6, 5, 0, -4, 2]))

function quickSortMTwo(array) {
    if(array.length < 2) return array;
    
    let left = [];
    let right = [];
    
    let pivot = array.pop()
    
    for(let i = 0; i < array.length; i++) {
        if(pivot < array[i]) {
            left.push(array[i])
        } else {
            right.push(array[j])
        }
    }
    
    return [...quickSortMTwo(left), pivot, ...quickSortMTwo(right)]
}

// console.log(quickSort([7, -2, 4, 1, 6, 5, 0, -4, 2]))


function mergeSort(array) {

    let mid = array.length/2

    if(array.length < 2) return array;

    let left = array.splice(0, mid)
    return merge(mergeSort(left), mergeSort(array))
}

const merge = (left, right) => {
    let res = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    return [...res, ...left, ...right]
}

console.log(mergeSort([7, -2, 4, 1, 6, 5, 0, -4, 2]))