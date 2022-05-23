//There are two types of binary heap: Max Binary and Min Binary. In max binary parent node has greater value than its children nodes while in min binary parent node has smaller value.
//For any index n in an array, the left child is stored at 2n + 1 and right child is stored at 2n + 2. 
//For any child at index n, the parent node is at Math.floor((n - 1)/2)



class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(2)
const d = new Node(3)
const e = new Node(4)
const f = new Node(4)
const g = new Node(3)


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;