class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    let currentTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  shift(){
    if(!this.head) return undefined;
    let currentHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null
    }
    this.length--;
    return currentHead;
  }

  unshift(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}



let cs = new DoublyLinkedList()
cs.push(12);
cs.push(13);
cs.push(14);
cs.unshift(11);
console.log(cs);
