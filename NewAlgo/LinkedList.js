class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let a = new Node(1);
let b = new Node(2);
let c = new Node(2);
let d = new Node(5);
let e = new Node(5);
let f = new Node(7);
let g = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const x = new Node(1)
const y = new Node(2)
// const z = new Node(3)
// const m = new Node(4)
// const n = new Node(5)

x.next = y;
// y.next = z;
// z.next = m;
// m.next = n;
// n.next = y;


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

// console.log(zipperList(a, x))


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


/* Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */


var mergeTwoLists = function(list1, list2) {
   let tail = new Node()
   let head = new Node()

   if(list1 === null && list2 === null) return null;
   if(list1 === null) return list2;
   if(list2 === null) return list1;

   if(list1.val < list2.val) {
       head.next = list1;
   } else {
       head.next = list2;
   }

   let current1 = list1
   let current2 = list2

   while(current1 != null && current2 != null) {
       if(current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
       } else  {
           tail.next = current2
           current2 = current2.next
       }
       tail = tail.next
   }

   if(current1 != null) tail.next = current1
   if(current2 != null) tail.next = current2

   return head.next
};

// console.log(mergeTwoLists(a, x))

/* 
83. Remove Duplicates from Sorted List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. */


//Iterate throught the linkedlist
//if duplicate is found remove it

var deleteDuplicates = function(head) {
    let current =  head;
    while(current != null && current.next !=null) {
        if(current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head;
};

// console.log(deleteDuplicates(a))


/* 141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false. */


var hasCycle = function(head) {
    let pointer1 = head;
    let pointer2 = head;
    if(head === null) return false;
    if(head.next === null) return false;

    while(pointer2 && pointer2.next && pointer2.next.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;

        if(pointer1 == pointer2) {
            return true
        }
    }
    return false
};

console.log(hasCycle(x))