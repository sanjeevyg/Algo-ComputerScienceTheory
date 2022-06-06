function mergeSort(ar) {
    if(ar.length <= 1) return ar
    let middle = Math.floor(ar.length/2);
    let first = mergeSort(ar.slice(0, middle));
    let second = mergeSort(ar.slice(middle));
    return merge(first, second)
}

const merge = (ar1, ar2) => {
    let newArr = [];
    while(ar1.length > 0 && ar2.length > 0) {
        if(ar1[0] < ar2[0]) {
            newArr.push(ar1.shift())
        } else {
            newArr.push(ar2.shift())
        }
    }
    return [...newArr, ...ar1, ...ar2]
}
// const merge = (ar1, ar2) => {
//     let newArr = [];
//     let i = 0;
//     let j = 0;
//     while(i < ar1.length && j < ar2.length) {
//         if(ar1[i] < ar2[j]) {
//             newArr.push(ar1[i])
//             i++
//         } else {
//             newArr.push(ar2[j])
//             j++
//         }
//     }

//     while(i < ar1.length) {
//         newArr.push(ar1[i])
//         i++
//     }

//     while(j < ar1.length) {
//         newArr.push(ar2[j])
//         j++
//     }
//     return newArr
// }

// console.log(merge([1, 2, 3], [ 0, 2, 5, 7]))


console.log(mergeSort([1, 3, 7, 3, 2, 14, 12, 27, 33, 5, 1, 19]))