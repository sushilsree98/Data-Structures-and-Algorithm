class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value)
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root
      while(true){
        if(value === currentNode.value) {
          return undefined;
        }
        if(newNode.value < currentNode.value){
          if(currentNode.left == null) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
            if(currentNode.right == null) {
              currentNode.right = newNode;
              return this
            }
            currentNode = currentNode.right;
        }
      }
    }
  }

  find(value) {
    if(this.root == null) return "Not Found";
    else {
      let currentNode = this.root
      let found = false;
      while(currentNode && !found){
        if (value < currentNode.value) {
          currentNode = currentNode.left;
          }
       else if (value > currentNode.value) {
          currentNode = currentNode.right;
        }else{
          return true;
        }
      }
      return found;
    }
  }

  BFS(){
    let node = this.root,
        data = [],
        queue = [];
        queue.push(node)
        while(queue.length) {
          node = queue.shift();
          data.push(node.value);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
       return data;
  }
  
}
    //     10
    //   5     15
    // 2   7 12   17
let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(2)
tree.insert(7)
tree.insert(12)
tree.insert(17)
tree.find(8)
console.log(tree.BFS());
