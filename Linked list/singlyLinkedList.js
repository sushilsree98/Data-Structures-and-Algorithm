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
}

let list = new singlyLinkedList();
list.push("Sushil");
list.push("Akshaya");
list.push("Akku");
list.push("Gayathri");
list.pop()
console.log(list);
