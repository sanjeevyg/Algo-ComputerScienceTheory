
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



let a = new ListNode(2);
let b = new ListNode(4);
let c = new ListNode(5);
let d = new ListNode(1);
let e = new ListNode(4);
let f = new ListNode(9);

a.next = b;
b.next = c;
// c.next = d;
d.next = e;
e.next = f;


/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

var twoSum = function(nums, target) {
    let obj = {};

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in obj) return [obj[nums[i]], i]  
        obj[target - nums[i]] = i
        // console.log(obj)
    }
}

nums = [2,7,11,15], target = 26

// console.log(twoSum(nums, target))


/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */


var addTwoNumbers = function(l1, l2) {
    //setup the next values for both the list
    //setup the carryover
    let current = null;

    if(l1 || l2 ) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let next1 = l1 ? l1.next : 0;
        let next2 = l2 ? l2.next : 0;
        let carry = (val1 + val2)/10
        let sum = carry > 9 ? val1 + val2 + 1 : val1 + val2

        current = new ListNode(sum % 10)

        current.next = addTwoNumbers(next1, next2)
        if(carry === 1) {current.next = new ListNode(1)}
    }
    return current
};

console.log(addTwoNumbers(a, d))


/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not. */

var isPalindrome = function(x) {
    let revS = String(x).split("").reverse().join("")

    if (revS == x) return true 
    return false
};

// console.log(isPalindrome(123))
// console.log(isPalindrome(121))
// console.log(isPalindrome(121121))


/* Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head. */

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    second = dummy
    first = dummy
    
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    while( first != null) {
        second = second.next
        first = first.next
    }

    second.next = second.next.next

    return dummy.next
};


console.log(a, 3)


/* 

Merge Two Sorted Lists


You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */

var mergeTwoLists = function(list1, list2) {
    let tail = new ListNode()
    let head = tail
 
    if(list1 === null && list2 === null) return null
    if(list1 === null) return list2
    if(list2 === null) return list1
 
    if(list1.val < list2.val) {
        tail.next = list1
    } else {
        tail.next = list2
    }
 
    let current1 = list1 
    let current2 = list2
 
    while(current1 != null && current2 != null) {
        if(current1.val < current2.val) {
            tail.next = current1 
            current1 = current1.next
        } else {
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next
    }
 
    if(current1 != null) tail.next = current1
    if(current2 != null) tail.next = current2
 
    return head.next
}


var mergeTwoListsR = function(list1, list2) {
  
    if(list1 === null)  {
        return list2
    } else if(list2 === null) {
        return list1
    } else if( list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}







console.log(mergeTwoListsR(a, d))