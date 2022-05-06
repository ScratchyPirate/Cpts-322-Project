
class Node {
    constructor() {
        this.value = 0;
        this.next = null;
    }
}

class List {

    // Default constructor
    constructor() {
        this.root = null;
        this.size = 0;
    }

    // Explicit contructor with an initial value
    constructor(newValue) {
        this.root = new Node();
        this.root.value = newValue;
        this.next = null;
        this.size = 1;
    }

    // Push to end
    Append(newValue) {

        // creates a new node
        var newNode = new Node(newValue);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.root == null)
            this.root = node;
        else {
            current = this.root;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    // Insert at index "index"
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.root;

            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.root;
                this.root = node;
            } else {
                curr = this.root;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // Size function
    Size() {
        let count = 0;
        let node = this.root;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    // Delete all entries in class
    Clear() {
        this.root = null;
    }

    // Get last entry in list
    GetLast() {
        let lastNode = this.root;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    // Get first entry in list
    GetFirst() {
        return this.root;
    }


}