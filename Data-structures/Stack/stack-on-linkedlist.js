class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(element) {
    let newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    let poppedNode = this.top;
    this.top = poppedNode.next;
    this.size--;
    return poppedNode.value;
  }

  peek() {
    return this.top.value;
  }
  
  isEmpty(){
    return this.size === 0;
  }

  display() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let stack = new Stack();

// push elements into the stack
stack.push(10);
stack.push(20);
stack.push(30);

// pop() method is used to remove and return the topmost element (last inserted element)
let poppedElement = stack.pop();

// peek() method is used to return the topmost element without removing from stack
let peek = stack.peek();

// isEmpty() method is used to check whether the stack is empty or not it return true / false;
let empty = stack.isEmpty();

//  display() method is used to display all elements in a stack (last in first out);
stack.display();
