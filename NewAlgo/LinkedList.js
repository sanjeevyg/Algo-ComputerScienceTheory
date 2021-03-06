class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new ListNode(7);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(3);
let e = new ListNode(2);
let f = new ListNode(7);
// let g = new ListNode(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// f.next = g;

const x = new ListNode(21)
const y = new ListNode(22)
const z = new ListNode(9)
const m = new ListNode(36)
const n = new ListNode(86)

x.next = y;
y.next = z;
z.next = m;
m.next = n;
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
    let preNode = new ListNode();
    let prev = preNode;
    
    while(list1 != null && list2 != null) {
        if(list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    if(list1 != null) prev.next = list1;
    if(list2 != null) prev.next = list2;
    return preNode.next;
};

console.log(mergeTwoLists(a, x))

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

// console.log(hasCycle(x))


var hasCycleA = function(head) {
   let map = new Map();
   while(head != null) {
       if(map.has(head)) {
           return true
       } 
       map.set(head, head)   
       head = head.next
   }
   return false
};

// console.log(hasCycle(x))


/* 160. Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1: */

var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;

    let set1 = new Set();

    while(headA) {
        set1.add(headA)
        headA = headA.next
    }

    while(headB) {
        if(set1.has(headB)) {
            return headB
        }
        headB = headB.next
    }
    return null
};

// console.log(getIntersectionNode(a, x))

/* 
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has ListNode.val == val, and return the new head.
 */


var removeElements = function(head, val) {
    if(head === null) return null;
    let node = new ListNode()
    node.next = head;
    let prev = node;
    let current = head;

    while(current != null) {
        if(current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next
    }
    return node.next
};

// console.log(removeElements(a, 5))

// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let prev = null;
    let current = head;
    while(current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
};

var reverseListR = function(head, prev=null) {
    if(head === null) return prev
    let next = head.next;
    head.next = prev;
    return reverseListR(next, head)
};

// console.log(reverseListR(a))

/* 234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrom */

var isPalindrome = function(head) {
    let count = 0;
    let current = head;
    while(current != null) {
        current = current.next
        count++
    }

    let node = head;
    let array1 = [];
    let array2 = [];

    if (count % 2 === 0) {
        let newCount = 0;
        while(node && newCount != count/2) {
            array1.push(node.val)
            node = node.next
            newCount++
        }
        while(node && newCount != count) {
            array2.push(node.val)
            node = node.next
            newCount++
        }
    } 

    let prev = new ListNode()

    if (count % 2 !== 0) {
        let newCount = 0;
        while(node && newCount != Math.ceil(count/2)) {
            array1.push(node.val)
            prev = node;
            node = node.next
            newCount++
        }
        array2.push(prev.val)
        while(node && newCount != count) {
            array2.push(node.val)
            node = node.next
            newCount++
        }
    } 

    if (array1.length === array2.length && array1.reverse().every((element, index) => element === array2[index] )) return true
    return false
};

var isPalindromeR = function(head) {
    let count = 0;
    let current = head;
    while(current != null) {
        current = current.next
        count++
    }

    let head1 = head;
    let node1 = head1;
    let head2 = head;
    let node2 = head2;

    if(current % 2 == 0) {
        let newcount = 0;
        while(node1) {
            if(newcount === count/2) {
                node1.next = null 
            } else {
                node1 = node1.next
                newcount++
            }
        }

        while(node1 && newcount !== count) {
            node1 = node1.next
            newcount++
        }

    }
   


}

console.log(isPalindromeR(a))