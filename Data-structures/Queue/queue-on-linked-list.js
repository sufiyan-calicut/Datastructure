// create the node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Create the Queue data structure
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // isEmpty() method checks if the queue is empty;
  isEmpty() {
    return this.size === 0;
  }
  // enqueue() method used to add an element into the rear side of queue
  enqueue(element) {
    let newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  //   dequeue method used to remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    let removedNode = this.head;
    this.head = removedNode.next;
    // if queue is empty, the below code is to pointer to indicate there are no more elements
    if (this.isEmpty()) this.tail = null;
    this.size--;
    return removedNode.value;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.head.value;
  }

  getSize() {
    return this.size;
  }

  display() {
    if (this.isEmpty()) {
      return "queue is empty";
    }

    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let queueSample = new Queue();
queueSample.enqueue(10);
queueSample.enqueue(20);
queueSample.enqueue(30);

queueSample.display(); // Display elements in the queue
console.log(queueSample.dequeue()); // Dequeue the front element
console.log(queueSample.front()); // Get the front element
console.log(queueSample.getSize()); // Get the size of the queue
