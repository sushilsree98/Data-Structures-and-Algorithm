class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = this.first;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;
    let node = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first  = this.first.next;
    node.next = null;
    --this.size;
    return node.val;
  }
}

let queue = new Queue();
console.log(queue.enqueue("Hello"));
console.log(queue.enqueue("World"));
console.log(queue.enqueue("John"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
