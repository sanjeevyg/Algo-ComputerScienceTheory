

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

 var mergeKLists = function(lists) {
    let array = [];
    lists.forEach(element => {
        while(element) {
            array.push(element.val)
            element = element.next
        }
    })
    array.sort((a, b) => a - b)
   

    let newArray = array.map(e => new ListNode(e))

    let link = new ListNode()
    let node = link
    let count = 0
    while(count < newArray.length) {
        node.next = newArray[count]
        node = node.next
        count++
    }

    newArray.forEach(e => {
        node.next = e 
        node = node.next
     }  
    )

    return link.next
};





let list1 = new ListNode(1)
list1.next = new ListNode(4)
list1.next.next = new ListNode(5)

let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

let list3 = new ListNode(2)
list3.next = new ListNode(6)

// console.log(list1)

let ar = [list1, list2, list3]

console.log(mergeKLists(ar))



