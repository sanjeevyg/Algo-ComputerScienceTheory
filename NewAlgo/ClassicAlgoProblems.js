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

console.log(binarySearchRecurssive(arr, start, end, target))


