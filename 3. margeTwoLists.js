
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}



var mergeTwoLists = function(list1, list2) {
    let list = new ListNode()
    let current = list

    console.log(list1.val)
    console.log(list2.val)
        
    while(list1 || list2) {

        if(!list1 && list2) {
            current.next = new ListNode(list2.val)
            current = current.next
            list2 = list2.next 
            console.log("first")
        } else if (list1 && !list2) {
            current.next = new ListNode(list1.val)
            current = current.next
            list1 = list1.next 
            console.log("second")
        } else if (!list1 && !list2) {
            current.next = null
            console.log("third")
        } else if (list2.val > list1.val) {
            
            current.next = new ListNode(list1.val)
            current = current.next
            list1 = list1.next 
            
            // current.next = new ListNode(list2.val)
            // current = current.next
            // list2 = list2.next 
            console.log("fourth")
            
        } else if(list2.val < list1.val){
            
            current.next = new ListNode(list2.val)
            current = current.next
            list2 = list2.next 

            // if(list1.next)
            
            // current.next = new ListNode(list1.val)
            // current = current.next
            // list1 = list1.next 
            console.log("fifth")
        }
     }
     return list.next
};



let list1 = new ListNode(5)
// console.log(list1)

let list2 = new ListNode(1)
list2.next = new ListNode(2)
list2.next.next = new ListNode(4)


console.log(mergeTwoLists(list1, list2))