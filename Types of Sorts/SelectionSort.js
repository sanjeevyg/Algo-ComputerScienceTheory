function selectionSort(ar) {
    let swap = (ar, k, l) => {
        [ar[k], ar[l]] = [ar[l], ar[k]]
    }

    for(let i = 0; i < ar.length; i++) {
        let min = i;
        for(let j = i + 1; j < ar.length; j++) {
            if(ar[j] < ar[min]) min = j;
        }
        if(i != min) swap(ar, i, min)
    }
    return ar
}


console.log(selectionSort([1, 3, 7, 3, 2, 14, 12, 27, 33, 5, 1, 19]))