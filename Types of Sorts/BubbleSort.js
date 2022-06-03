

function bubbleSort(ar) {

    let swap = (ar, k, l) => {
        [ar[k], ar[l]] = [ar[l], ar[k]]

        // let temp = ar[k];
        // ar[k] = ar[l];
        // ar[l] = temp
    }
    
    for(let i = ar.length; i > 0; i --) {
        let noSwap = true;
        for(let j = 0; j < i - 1; j++) {
            if(ar[j + 1] < ar[j]) {
                swap(ar, j, j + 1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return ar

}


console.log(bubbleSort([1, 3, 7, 3, 2, 14, 12, 27, 33, 5, 1, 19]))