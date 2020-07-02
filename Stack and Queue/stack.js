/*
Can be implemented using Array
Unshift and shift are inefficient
Push and Pop are efficient.
*/

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = this.first;
    }else{
      let temp = this.first
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop(){
    if(!this.first) return null;
    let node = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    node.next = null;
    this.size--;
    return node.val;
  }
}

let stack = new Stack();
console.log(stack.push(3))
console.log(stack.push(4))
console.log(stack.push(5))
console.log(stack.pop())
