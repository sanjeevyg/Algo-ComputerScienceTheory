function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let current = head;
    let count = 1;
    let previous;
    while(current.next) {
        current = current.next
        count++
    }
    
    let index = count - n
    
    let count1 = 0
    let current1 = head;

    
    if(current1.next === null) {
        return null 
    } else if (index === 0) {
        current1.value = null
        return current1.next
    } else {
        while(count1 < index && index > 0) {
            previous = current1 
            current1 = current1.next
            count1++
        }
        previous.next = current1.next
    }
    
    return head
};


let ll = new ListNode(1)
ll.next = new ListNode(2)
ll.next.next = new ListNode(3)
ll.next.next.next = new ListNode(4)
ll.next.next.next.next = new ListNode(5)
console.log(ll)

removeNthFromEnd(ll, 2)