

function insertionSelectionSort(ar) {
    for(var i = 1; i < ar.length; i++) {
        var current = ar[i];
        for(var j = i - 1; j >= 0  && ar[j] > current; j--) {
            console.log("current", current)
            console.log(["i", "j + 1", "j"], [[i, j + 1, j], ar[i], ar[j + 1], ar[j]])
            ar[j + 1] = ar[j];
            console.log("I", ar)
        }
        console.log("j + 1 afterLoop", j + 1)
        ar[j + 1] = current;
        console.log("II", ar)
    }
    return ar
}


console.log(insertionSelectionSort([1, 3, 7, 3, 2, 14, 12, 27, 33, 5, 1, 19]))