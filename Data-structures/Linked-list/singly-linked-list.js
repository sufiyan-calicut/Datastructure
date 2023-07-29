class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add an element to the end of the linked list
    append(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Add an element to the beginning of the linked list
    prepend(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Convert an array of elements into a linked list
    arrayToLinkedList(array) {
      for (let i = 0; i < array.length; i++) {
        this.append(array[i]);
      }
    }
  
    // Search for an element in the linked list
    search(element) {
      if (!this.head) return false;
      let current = this.head;
      while (current) {
        if (current.value === element) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
  
    // Add a value after an existing node
    insertAfter(existingNode, value) {
      let current = this.head;
      while (current) {
        if (current.value === existingNode) {
          let newNode = new Node(value);
          newNode.next = current.next;
          current.next = newNode;
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // Add a value before an existing node
    insertBefore(existingNode, value) {
      let newNode = new Node(value);
      if (this.head.value === existingNode) {
        newNode.next = this.head;
        this.head = newNode;
        return true;
      } else {
        let current = this.head;
        let prev = null;
        while (current) {
          if (current.value === existingNode) {
            newNode.next = current;
            prev.next = newNode;
            return true;
          }
  
          prev = current;
          current = current.next;
        }
        return false;
      }
    }
  
    // Delete a node with the specific value
    deleteNode(value) {
      if (this.head.value === value) {
        let removedNode = this.head;
        this.head = removedNode.next;
      } else {
        let current = this.head;
        let prev = null;
        while (current) {
          if (current.value === value) {
            prev.next = current.next;
            return;
          }
          prev = current;
          current = current.next;
        }
        return false;
      }
    }
  
    // Display all elements of the linked list
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    // Print elements in reverse order
    printReverse() {
      this.printReverseOrder(this.head);
    }
  
    // Helper function to print elements in reverse order (recursive)
    printReverseOrder(node) {
      if (node.next) {
        this.printReverseOrder(node.next);
      }
      console.log(node.value);
    }
  }
  
  let list = new SinglyLinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  
  list.prepend(500);
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  list.arrayToLinkedList(arr);
  
  // Uncomment the following lines for testing:
  // console.log(list.search(7));
  // console.log(list.deleteNode(10));
  
  // Inserting a value before and after a given node
  console.log(list.insertBefore(3, 2.5));
  console.log(list.insertAfter(3, 3.5));
  
  list.display();
  list.printReverse();
  