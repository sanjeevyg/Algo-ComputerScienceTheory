

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
var swapPairs = function(head) {
    if(!head || head.next === null) {
        return head
    }

    let current = head;
    let count = 1;
    let even = [];
    let odd = [];

    while(current) {
        count % 2 ? odd.push(current.val) : even.push(current.val)
        current = current.next
        count++
    }

    let result = new ListNode()
    let node = result
    let countResult = 1
    let countEven = 0
    let countOdd = 0
    let current1 = head
   
    while(current1) {
         if((countResult % 2) && countEven < even.length){
            node.next = new ListNode(even[countEven])
            node = node.next
            console.log(`countResultEven -> ${countResult}`, node.val)
            countEven++
        } else{
            node.next = new ListNode(odd[countOdd])
            node = node.next
            console.log(`countResultOdd-> ${countResult}`, node.val)
            countOdd++
        }
        current1 = current1.next
        countResult++
    }
    console.log(even)
    console.log(odd)
    return result.next
}




let list = new ListNode(2)
list.next = new ListNode(1)
list.next.next = new ListNode(3)

console.log(swapPairs(list))