function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function addTwoNumbers(l1, l2 ) {
    let currentl1 = l1.val
    let currentl2 = l2.val

    let count = 0;
    let l3val = 0;

    let val1;
    let val2;

    let l3 = new ListNode(0)
    let carry = 0;

    while(l1 || l2) {

       val1 = l1.val
       console.log("line 23 ->", val1)
       val2 = l2.val
       console.log("line 25 ->", val2)

       console.log("line 27 ->", (val1 + val2) % 10)

       if(count === 0) {
           l3val = (val1 + val2 >= 10) ?  ((val1 + val2) % 10) : (val1 + val2);
       } else {
           l3val = (val1 + val2 >= 10) ?  (val1 + val2 + carry) % 10 : (val1 + val2 + carry);
       }

       console.log("line 34 ->", l3val)
       
       let node = new ListNode(l3val)

       console.log("line 34 ->",node.val)

       if (count === 0) {
           l3 = node
       } else {
           let current;
           current = l3
           while(current.next) {
               current = current.next
           }
           current.next = node
       }
       l1 = l1.next
       l2 = l2.next
       carry = (val1 + val2 > 9) ?  1 : 0;
       count++
    }

   console.log(l3)
    
}



let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)



addTwoNumbers(l1, l2)