class Node{
  constructor(val){
    this.val=val;
    this.next=null;
  }
}

class singlyLinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0
  }

  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail=newTail;
    this.tail.next=null;
    this.length--;
    return this;
  }

  shift(){
    if(this.head==null) return undefined
    let temp=this.head
    this.head = temp.next;
    this.length--;
    if(this.length == 0){
      this.tail=null;
    }
    return temp;
  }

  unshift(val){
    let value = new Node(val);
    if(!this.head){
      this.head=value;
      this.tail=this.head;
    }else{
      value.next=this.head;
      this.head=value;
    }
    this.length++;
    return this;
  }
}

let list = new singlyLinkedList();
list.push("Sushil");
list.push("John");
list.push("Doe");
list.unshift("hello");

console.log(list);
