//There are two types of binary heap: Max Binary and Min Binary. In max binary parent node has greater value than its children nodes while in min binary parent node has smaller value.
//For any index n in an array, the left child is stored at 2n + 1 and right child is stored at 2n + 2. 
//For any child at index n, the parent node is at Math.floor((n - 1)/2)



//Insert to a Max Binary Heap
//Steps -
//Make a class MaxBinaryHeap with constructor of values
//Make a insert method
//Make a bubble method


class MaxBinaryHeap {
    constructor() {
        this.values = [49, 39, 33, 18, 27, 12, 55];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        //Find a last index 
        //Find a parent index
        //Find a inserted value and value at parent index. If value at parent index is less, swith the values with child index. 
        //Repeat the last step until maxBinary heap is achieved
        let idx = this.values.length - 1;
        const element = this.values[idx];
        
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            const parent = this.values[parentIdx]
            if(parent >= element) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(99)
heap.insert(14)
heap.insert(36)
console.log(heap)