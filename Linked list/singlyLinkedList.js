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
    this.length=0;
  }

  push(val){
    let newNode = new Node(val);
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
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length==0){
      this.head=null;
      this.tail=null;
    }
    return current;
  }


  shift(){
    if(!this.head) return undefined;
    let current = this.head;
    this.head=current.next;
    this.length--;
    if(this.length==0){
      this.tail=null;
    }
    return current;
  }

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head=newNode;
      this.tail=this.head;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value,index){
    let foundNode = this.get(index)
    if(foundNode){
        foundNode.val = value;
        return true;
    }
    return false;
  }
}

let list = new singlyLinkedList();
list.push("Sushil");
list.push("John Doe");g
list.unshift("Hello");
console.log(list.set("HI",1),list);
