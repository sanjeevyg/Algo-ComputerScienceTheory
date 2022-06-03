

function insertionSelectionSort(ar) {
    for(var i = 1; i < ar.length; i++) {
        var current = ar[i];
        for(var j = i - 1; j >= 0  && ar[j] > current; j--) {
            ar[j + 1] = ar[j];
        }
        ar[j + 1] = current;
    }
    return ar
}


console.log(insertionSelectionSort([1, 3, 7, 3, 2, 14, 12, 27, 33, 5, 1, 19]))