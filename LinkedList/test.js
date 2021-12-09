
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



var mergeTwoLists = function(l) {
    let list = new ListNode(9)
    let current = l
    while(current.next) {
        current = current.next
    }
    current.next = list
    return l
};


let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

console.log(list1)

console.log(mergeTwoLists(list1))