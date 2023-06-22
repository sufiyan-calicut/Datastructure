class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if(this.isEmpty()){
      return 'stack is empty';
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    for (let i = this.items.length - 1; i >= 0; i--) {
      console.log(this.items[i]);
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
