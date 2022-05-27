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
        this.values = [49, 39, 33, 18, 27, 12];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
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

    remove() {
        let first = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return first
    }
        
    sinkDown() {
        let idx = 0;
        while(idx < this.values.length) {
            let parent = this.values[idx]
            let l = this.values.length
            let leftIdx = 2*idx + 1;
            let rightIdx = 2*idx + 2;
            let swap = null;
            let leftChild;
            let rightChild;

            if(leftIdx < l) {
                leftChild = this.values[leftIdx]
                if(leftChild > parent) {
                    swap = leftIdx;
                }
            }

            if(rightIdx < l) {
                rightChild = this.values[rightIdx]
                if(swap === null && rightChild > parent || 
                    swap != null && rightChild > leftChild) {
                    swap = rightIdx
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = parent
            idx = swap;
        }
    }
}


let heap = new MaxBinaryHeap()
console.log(heap.remove())
console.log(heap)