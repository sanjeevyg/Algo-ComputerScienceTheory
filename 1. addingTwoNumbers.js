function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function addTwoNumbers(l1, l2 ) { 
        let node = null
        const carry = arguments[2]
        let count = 0
        if (l1 || l2) {
            const val1 = l1 ? l1.val : 0
            const val2 = l2 ? l2.val : 0
            const next1 = l1 ? l1.next : null
            const next2 = l2 ? l2.next : null
            const val = carry ? val1 + val2 + 1 : val1 + val2
            node = new ListNode(val % 10)
            node.next = addTwoNumbers(next1, next2, val >= 10)
            // console.log(`count -> ${count}`)
            console.log(node)
        } else if (carry) {
            // console.log("??")
            node = new ListNode(1)
            node.next = null
        }
    console.log(node)
}



let l1 = new ListNode(9)
l1.next = new ListNode(9)
l1.next.next = new ListNode(9)
l1.next.next.next = new ListNode(9)
l1.next.next.next.next = new ListNode(9)
l1.next.next.next.next.next = new ListNode(9)
l1.next.next.next.next.next.next = new ListNode(9)

let l2 = new ListNode(9)
l2.next = new ListNode(9)
l2.next.next = new ListNode(9)
l2.next.next.next = new ListNode(9)



addTwoNumbers(l1, l2 )
