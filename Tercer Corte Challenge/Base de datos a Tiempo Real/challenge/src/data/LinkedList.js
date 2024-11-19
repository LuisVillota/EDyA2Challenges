class Node {
    constructor(todo) {
        this.todo = todo; 
        this.next = null; 
    }
}

export class LinkedList {
    constructor() {
        this.head = null; 
        this.tail = null;
    }

    append(todo) {
        const newNode = new Node(todo);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    toArray() {
        const todos = [];
        let currentNode = this.head;
        while (currentNode) {
            todos.push(currentNode.todo);
            currentNode = currentNode.next;
        }
        return todos;
    }
}
