function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



 var deleteDuplicates = function(head) {
    if(!head || head.next === null) {
        return head
    }

    let values = []
    let current = head

    while(current) {
        values.push(current.val)
        current = current.next
    }

    values = values.filter( (element, pos) => values.indexOf(element) == pos)
    let newhead = new ListNode()

    let node = newhead

    values.forEach(e => {
        node.next = new ListNode(e)
        node = node.next
    })
    console.log(newhead.next)
};



let list = new ListNode(2)
list.next = new ListNode(1)
list.next.next = new ListNode(1)
list.next.next.next = new ListNode(5)


deleteDuplicates(list)
