class Node {
  constructor(){
    this.value = null;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node()
tree.root.value = 5;
tree.root.left = 4;
tree.root.right = 8
tree.root.right.left = 6;
tree.root.right.right = 10

console.log(tree.root);
