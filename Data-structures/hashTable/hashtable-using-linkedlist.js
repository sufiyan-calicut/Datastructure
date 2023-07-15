class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the linked list
    addNode(key, value) {
      const newNode = new Node(key, value);
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
  
    // Find a node with a specific key
    findNode(key) {
      let current = this.head;
      while (current) {
        if (current.key === key) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  
    // Remove a node with a specific key
    removeNode(key) {
      if (!this.head) {
        return;
      }
  
      if (this.head.key === key) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current) {
        if (current.key === key) {
          previous.next = current.next;
          return;
        }
        previous = current;
        current = current.next;
      }
    }
  }
  class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += key.charCodeAt(i);
      }
      return hashCode % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = new LinkedList();
      }
      this.table[index].addNode(key, value);
    }
  
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        const node = this.table[index].findNode(key);
        if (node) {
          return node.value;
        }
      }
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        this.table[index].removeNode(key);
      }
    }
  }
  