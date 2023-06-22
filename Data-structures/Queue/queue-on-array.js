class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }

    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  display() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    let length = this.items.length;
    for (let i = 0; i < length; i++) {
      console.log(this.items[i]);
    }
  }
}

let queue = new Queue();

// enqueue method used to add an element on the rear side of the 'Queue';
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// dequeue method used to remove and return element from the front of the queue (first in first out)
let removedElement = queue.dequeue();

// isEmpty method is used to check whether the 'Queue' is empty or not;
let isEmpty = queue.isEmpty();

// front method is used to return the element from the front of the queue
let frontElement = queue.front();

// display() method is used to display all elements in queue
queue.display();
