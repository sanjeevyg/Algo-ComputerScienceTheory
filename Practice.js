class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addHead(value) {
        this.head = new Node(value, this.head)
        this.size++
    }

    printLinkedList() {
        let current;
        current = this.head
        while(current) {
            console.log(current.value)
            current = current.next
        }
        console.log("size:", this.size)
    }

    deleteDuplicate() {
        //loop through linkedList and if duplicate is found eleminate it
        //skip the duplicate by previous.next = current.next where current is duplicate
        //for this start from head; assign current to head; Once loop is over and duplicate is found start current from second node.
        let previous;
        let oldHead;
        let head = this.head
        let current = this.head
        while(head.next) {
            oldHead = head
            console.log("oldHead value = ", oldHead.value)
            while(current.next) {
                previous = current
                current = current.next
                if(oldHead.value === previous.next.value) {
                    previous.next = current.next
                    this.size--
                } 
            }
        head = head.next
        current = head
        console.log("line 45 =", head.value)
        }
    }
    
    kthTolast(k) {
        //loop through linked list until we find kth element
        //after kth element is found console.log rest of the element 
        let current = this.head 
        let kthElement;
        let count = 1
        while(current.next) {
            if(count === k) {
                kthElement = current
            }
            current = current.next
            count++
        }
        while (kthElement.next) {
            console.log("value of kth element :", kthElement.value)
            kthElement = kthElement.next
        }
     }

     deleteMiddleNode(i) {
        if(i > 0 && i > this.size || i === this.size) {
            return;
        } else if(i === 0) {
            return
        } else if(i === (this.size - 1)) {
            return;
        } else {
            let current;
            let previous;
            current = this.head;
            let count = 0;
            while(count < i) {
                previous = current
                current = current.next
                count++
            }
            previous.next = current.next
            this.size--
        }
     }

     addTail(n) {
        let node = new Node(n);
        if(this.head.next === null) {
            this.head = node
        } else {
            let current;
            current = this.head
            while(current.next) {
                current = current.next;
            }
            current.next = node
        }

     }

     
    // getHead(l) {
    //     console.log("headValue", l.head.value)
    //  }
      
    creatNode() {
        let l3 = new Node()
        console.log(l3)
    }

     addTwoNumbers(l1, l2) {

         let currentl1 = l1.head
         let currentl2 = l2.head

         let count = 0;
         let l3NodeValue;

         let value1;
         let value2;

         let l3 = new LinkedList()
         let carry;

         while(currentl1 || currentl2) {

            value1 = currentl1.value
            value2 = currentl2.value


            if(count === 0) {
                l3NodeValue = (value1 + value2 >= 10) ?  (value1 + value2) % 10 : value1 + value2;
            } else {
                l3NodeValue = (value1 + value2 >= 10) ?  (value1 + value2 + carry)%10 : value1 + value2 + carry;
            }
            
            let node = new Node(l3NodeValue)

            if (count === 0) {
                l3.head = node
            } else {
                let current;
                current = l3.head
                while(current.next) {
                    current = current.next
                }
                current.next = node
            }

            count++
            
            currentl1 = currentl1.next
            currentl2 = currentl2.next
            carry = (value1 + value2 >= 10) ?  1 : 0;
         }
     }
}

ll = new LinkedList()
l1 = new LinkedList()
l2 = new LinkedList()

l1.addHead(3)
l1.addHead(4)
l1.addHead(2)

//[2, 4, 3], [5, 6, 4]

//342 + 465 = 807 => 708

l2.addHead(4)
l2.addHead(6)
l2.addHead(5)

// console.log(l1)
// console.log(l2)
// l1.printLinkedList()
// l2.printLinkedList()


ll.addTwoNumbers(l1, l2)
// l1.printLinkedList()
// l1.addTwoNumbers()
// l1.creatNode()
