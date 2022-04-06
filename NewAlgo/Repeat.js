
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



let a = new ListNode(2);
let b = new ListNode(4);
let c = new ListNode(3);
let d = new ListNode(5);
let e = new ListNode(6);
let f = new ListNode(4);

a.next = b;
b.next = c;

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
    let current = new ListNode()

    if(l1 || l2 ) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let next1 = l1 ? l1.next : 0;
        let next2 = l2 ? l2.next : 0;
        let carry = (val1 + val2)/10
        let sum = carry > 9 ? val1 + val2 + 1 : val1 + val2

        current = new ListNode(sum % 10)

        current.next = addTwoNumbers(next1, next2)
        if(carry == 1) {current.next = new ListNode(1)}
    }
    return current
};

console.log(addTwoNumbers(a, d))
