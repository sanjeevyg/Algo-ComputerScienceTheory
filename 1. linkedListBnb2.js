class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertHead(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    insertTail(data) {
        let node = new Node(data);
        let current;
        if(!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    removeAt(index) {
        if(index > 0 && index > this.size) {
            return
        } else if( index === 0) {
            this.head = null;
            this.size = 0;
        }

        let current;
        current = this.head
        let previous;
        let count = 0;
        while(count < index) {
            previous = current
            console.log("previous", previous.data)
            count++
            current = current.next
            console.log("current", current.data)
        }
        previous.next = current.next
        this.size--
    }

    addAt(index, data) {
        let current;
        let previous;
        let count = 0;
        let node = new Node(data)
        if(index > 0 && index > this.size) {
            return
        } else if (index === 0) {
            this.head = node
        } else {
            current = this.head;
            while(count < index) {
                count++
                previous = current 
                current = current.next
                }
                previous.next = node 
                node.next = current
            }
            this.size++
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    getAt(index) {
        
        let current;
        let count = 0;
        if(index > 0 && index > this.size) {
            return;
        } else if(index === 0) {
            return this.head.data 
        } else {
            current = this.head
            while(count < index) {
                console.log(`current at index ${count}`, current.data)
                current = current.next
                count++
            }
            console.log("index", current.data)

        }
    }
    
    printLinkedList() {
        let current = this.head
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()
ll.insertHead(100)
ll.insertHead(200)
ll.insertHead(300)
ll.insertTail(400)
ll.insertTail(500)
ll.printLinkedList()
ll.getAt(2)
