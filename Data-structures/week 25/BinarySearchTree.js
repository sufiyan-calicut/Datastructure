class Node{
  constructor(value){
      this.value = value
      this.left = null
      this.right = null
  }
}

class BinarySearchTree{
  constructor(){
      this.root = null
  }

  isEmpty(){
      return this.root === null;
  }

  insert(value){
      const newNode = new Node(value)
      if(this.isEmpty()){
          this.root = newNode
      }else{
          this.insertNode(this.root,newNode)
      }
  }
  insertNode(root,newNode){
      if(newNode.value < root.value){
          if(root.left === null){
              root.left = newNode
          }else{
              this.insertNode(root.left,newNode)
          }
      }else{
          if(root.right === null){
              root.right = newNode
          }else{
              this.insertNode(root.right,newNode)
          }
      }
  }

  search(value){
      return this.searchNode(this.root,value)
  }

  searchNode(node,value){
      if(node === null){
          return false
      }
      if(node.value === value){
          return true
      }else if(value < node.value){
          return this.searchNode(node.left,value)
      }else{
          return this.searchNode(node.right,value)
      }
  }

  preOrder(root){
      if(root){
          console.log(root.value);
          this.preOrder(root.left)
          this.preOrder(root.right)
      }
  }

  inOrder(root){
      if(root){
          this.inOrder(root.left)
          console.log(root.value);
          this.inOrder(root.right)
      }
  }

  postOrder(root){
      if(root){
          this.postOrder(root.left)
          this.postOrder(root.right)
          console.log(root.value);
      }
  }

  levelOrder(){
      const queue = []
      queue.push(this.root)
      while(queue.length){
          let curr = queue.shift()
          console.log(curr.value);
          if(curr.left){    
              queue.push(curr.left)
          }
          if(curr.right){
              queue.push(curr.right)
          }
      }
  }

  min(root){
      if(!root.left){
          return root.value
      }else{
          return this.min(root.left)
      }
  }

  max(root){
      if(!root.right){
          return root.value
      }else{
          return this.min(root.right)
      }     
  }

  delete(value){
    this.root = this.deleteNode(this.root,value)
  }
  deleteNode(root,value){
    if(root === null){
      return root
    }
    if(value< root.value){ 
      root.left = this.deleteNode(root.left,value)
    }else if(value > root.value){
      root.right =this.deleteNode(root.right,value)
    }else{
      if(!root.left && !root.right){
        return null
      }
      if(!root.left){
        return root.right
      }else if(!root.right){
        return  root.left
      }
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right,root.value)
    }
    return root
  }

  findClosestValue(value){
    let closest = this.root.value
    let currNode = this.root
    while(currNode != null){
        if(Math.abs(value - currNode.value) < Math.abs(value - closest)){
            closest = currNode.value
        }
        if(value < currNode.value){
            currNode = currNode.left    
        }else if(value > currNode.value){
            currNode = currNode.right
        }else{
            break;
        }
    }
    return closest
  }

  isBinarySearchTree() {
    return this.checkBST(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  }

  checkBST(node, min, max) {
    if (node === null) {
      return true;
    }

    if (node.value <= min || node.value >= max) {
      return false;
    }

    return (
      this.checkBST(node.left, min, node.value) &&
      this.checkBST(node.right, node.value, max)
    );
  }
}

let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)

console.log(bst.isBinarySearchTree());