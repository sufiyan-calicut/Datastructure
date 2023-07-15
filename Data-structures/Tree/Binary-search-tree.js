/* insertion, isempty, contains/ search, inorder, preorder, postorder,(dfs), level order(bfs), min and Max,deletion,types */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  display() {
    // this.inOrder(this.root);
    // this.preOrder(this.root);
    // this.postOrder(this.root);
    this.levelOrder(this.root);
  }
  // D-F-S traversals
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  // BFS traversal
  levelOrder(root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  findMinValue(root) {
    let current = root;
    while(current.left){
      current = current.left
    }
    return current;
  }
  findMaxValue(root) {
    let current = root;
    while(current.right){
      current = current.right
    }
    return current;
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }

      let inOrderSuccessor = this.findMinValue(root.right);
      root.value = inOrderSuccessor.value;
      root.right = this.deleteNode(root.right, inOrderSuccessor.value)
    }
    return root;
  }
}

const tree = new BinarySearchTree();
tree.insert(30);
tree.insert(40);
tree.insert(35);
tree.insert(45);
tree.insert(20);
tree.insert(25);
tree.insert(15);

console.log(JSON.stringify(tree));
console.log(tree.findMaxValue(tree.root))
console.log(tree.findMinValue(tree.root))
console.log(tree.search(45));
tree.delete(40)
tree.display();
