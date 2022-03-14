class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let a = new Node(1);
let b = new Node(2);
let c = new Node(5);
let d = new Node(7);
let e = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const x = new Node('x')
const y = new Node('y')
const z = new Node('z')

x.next = y;
y.next = z;


//start with the tail
//if odd select node from list 2
//if even select node from list 1 
//if list1 && list2 != null return chain 
//if list1 is null chain to list2 and vice-versa
//return head1

function zipperList(head1, head2) {
    let tail = head1
    let current1 = head1.next 
    let current2 = head2
    let count = 0;

    while(current1 != null && current2 != null) {
        if(count % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count++
    }
    if(current1 != null) tail.next = current1;
    if(current2 !=  null) tail.next = current2;

    return head1
}

console.log(zipperList(a, x))


function zipperListR(head1, head2) {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    
    let next1 = head1.next;
    let next2 = head2.next;
    
    head1.next = head2;
    head2.next = zipperListR(next1, next2);
    return head1
}
// console.log(zipperListR(a, x))