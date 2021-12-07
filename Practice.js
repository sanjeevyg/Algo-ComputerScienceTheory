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
        let previous;
        let oldHead;
        let head = this.head
        let current = this.head
        while(head.next) {
            oldHead = head
            while(current.next) {
                previous = current
                current = current.next
                if(oldHead.value === previous.next.value) {
                    previous.next = current.next
                    this.size--
                } 
            }
            console.log("current vlaue", current.value)
        head = head.next
        console.log("head value", head.value)
        }
    }
}

ll = new LinkedList()

ll.addHead(100)
ll.addHead(200)
ll.addHead(300)
ll.addHead(400)
ll.addHead(500)
ll.addHead(600)
ll.addHead(600)
ll.addHead(700)
ll.addHead(200)
ll.addHead(900)
ll.addHead(300)
ll.addHead(400)

console.log(ll)

ll.printLinkedList()
console.log("break")
ll.deleteDuplicate()
ll.printLinkedList()

