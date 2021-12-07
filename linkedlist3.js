class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0; 
    }

    //addHead
    addHead(value) {
        this.head = new Node(value, this.head)
        this.size++
    }

    //addTail
    addTail(value) {
        let node = new Node(value);
        let current;
        if(!this.head) {
            this.head = node
        } else {
            current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


  
    //addAt

    addAt(index, value) {
        let node = new Node(value)
        if(index > 0 && index > this.size) {
            return;
        } else if(index === 0) {
            this.head = node
        } else {
            let current;
            let previous;
            current = this.head
            let count = 0;
            while(count < index) {
                previous = current
                current = current.next 
                count++
            }
            previous.next = node
            node.next = current 
        }
        this.size++
    }
    //getAt 

    getAt(index) {
        let count = 0;
        let current;
        if(index > 0 && index > this.size) {
            return;
        } else if(index === 0) {
            return this.head.value
        } else {
            current = this.head
            while(count < index) {
                 current = current.next
                 count++
                }
            console.log("value", current.value)
        }
    }
    //removeHead
    removeHead() {
        let current = this.head 
        if(current.next === null) {
            this.head = null
        } else {
            this.head = current.next
        }
        this.size--
    }

    //removeTail

    removeTail() {
        let current = this.head 
        let previous;
        if(current.next === null) {
            this.head = null
        } else {
            while(current.next) {
                previous = current 
                current = current.next 
            }
            previous.next = null
        }
    }

    //serach
    search(value) {
        let current = this.head
        while(current) {
            if(current.value == value) {
                console.log("value found", current)
            }
            current = current.next
        }
    }

    //removeAtIndex

    removeAtIndex(index)  {
        let current = this.head
        if(index > 0 && index > this.size) {
            return;
        } else if( index === 0) {
            this.head = current.next
        } else {
            let previous;
            let count = 0;
            while(count < index) {
                previous = current;
                current = current.next
                count++
            }
            previous.next = current.next
        }
        this.size--
    }
    //clear 
    printListValue() {
        let current = this.head
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }  
}

const ll = new LinkedList()
ll.addHead(100)
ll.addHead(200)
ll.addHead(300)
ll.addTail(400)
ll.addAt(2, 500)

ll.printListValue()

ll.getAt(3)
// ll.removeHead()
// ll.removeTail()
ll.removeAtIndex(3)
ll.printListValue()
// ll.search(300)
