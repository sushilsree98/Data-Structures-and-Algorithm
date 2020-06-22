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
  get(index){
    if(!this.head) return undefined
    if(index < 0 || index >= this.length) return null;
    let mid = ~~(this.length/2);
    let count = 0;
    let current;
    if(this.length/2 > index){
      current = this.head
      while(count!==index){
          current = current.next;
          count++;
      }
    }else{
      count = this.length-1;
      current = this.tail;
      while(count!==index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index,value){
  let current = this.get(index)
  if(current){
    current.val = value;
    return true;
  }
  return false;
  }

  insert(index,val){
    if(index < 0 || index > this.length) return undefined;
    if(index == 0) return this.unshift(val);
    if(index == this.length) return this.push(val);
    let newNode = new Node(val);
    let previousNode = this.get(index-1);
    let nextNode = previousNode.next;
    newNode.prev = previousNode;
    previousNode.next = newNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index){
    if(index < 0 || index > this.length) return undefined;
    if(index == 0) return !!this.shift();
    if(index == this.length-1) return !!this.pop();
    let currentNode = this.get(index);
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;
    return true
  }
}



let cs = new DoublyLinkedList()
cs.push(12);
cs.push(13);
cs.push(14);
cs.unshift(11);
cs.insert(1,"Sushil")
cs.remove(1)
// console.log(cs.set(2,"new value"));
console.log(cs);
