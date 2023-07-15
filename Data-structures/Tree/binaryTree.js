class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
  
      if (this.root === null) {
        // If the tree is empty, set the new node as the root
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        // If the new value is less than the current node's value, go to the left child
        if (node.left === null) {
          // If there is no left child, insert the new node here
          node.left = newNode;
        } else {
          // Recursively insert into the left subtree
          this.insertNode(node.left, newNode);
        }
      } else {
        // If the new value is greater than or equal to the current node's value, go to the right child
        if (node.right === null) {
          // If there is no right child, insert the new node here
          node.right = newNode;
        } else {
          // Recursively insert into the right subtree
          this.insertNode(node.right, newNode);
        }
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  
  console.log(tree);
  