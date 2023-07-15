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
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
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
  printValues() {
    this.inorderTraversal(this.root);
  }

  bfs(){
    let queue = [];
    queue.push(this.root);
    while(queue.length){
      let current = queue.shift();
      console.log(current.value);
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
    }
  }

  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  delete(value) {
   this.root =  this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node to be deleted found

      // Case 1: Node has no children or only one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Case 2: Node has two children
      // const inOrderSuccessor = this.findMinValue(node.right);
      // node.value = inOrderSuccessor.value;
      // node.right = this.deleteNode(node.right, inOrderSuccessor.value);
    }

    return node;
  }

  findMinValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
}

const tree = new BinaryTree();
tree.insert(30);
tree.insert(20);
tree.insert(25);
tree.insert(10);
tree.insert(50);
tree.insert(55);

// tree.printValues()


// tree.delete(55)
// console.log('after')
// tree.printValues()

let count = 0;
function searchValue(node, value) {
  console.log(count++)
  if (node === null) {
    return false;
  }

  if (node?.value === value) {
    return true;
  }

  return searchValue(node?.left, value) || searchValue(node?.right, value);
}


tree.bfs()
// console.log(searchValue(tree.root,25))