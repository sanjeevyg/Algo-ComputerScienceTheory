function mergeSort(ar) {
    //make a merger function 
    

    
}

const merge = (ar1, ar2) => {
    let newArr = [];
    while(ar1.length > 0 || ar2.length > 0) {
        if(ar1[ar1.length - 1] < ar2[ar2.length -1]) {
            newArr.push(ar1.pop())
        } else {
            newArr.push(ar2.pop())
        }
    }

    return [...newArr, ...ar1, ...ar2]
}

console.log(merge([1, 2, 3], [ 0, 2, 5]))


// console.log(mergeSort([1, 3, 7, 3, 2, 14, 12, 27, 33, 5, 1, 19]))