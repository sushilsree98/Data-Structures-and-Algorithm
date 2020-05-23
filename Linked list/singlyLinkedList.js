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

  insert(index,value){
    if(index < 0 && index > this.length) return null;
    if(index  == 0) return !!this.unshift(value);
    if(index == this.length) return !!this.push(value);
    let newNode = new Node(value);
    let prev = this.get(index-1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true
  }

  remove(index){
    if(index < 0 || index > this.length) return null;
    if(index == 0) return this.shift();
    if(index == this.length) return this.pop();
    let prev = this.get(index-1);
    let current = prev.next;
    prev.next = current.next;
    this.length--;
    return current;
  }

  reverse(){
    if(!this.head) return undefined;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let nextValue;
    let prevValue = null;
    for(let i=0; i < this.length; i++){
      nextValue = node.next;
      node.next = prevValue;
      prevValue = node;
      node = nextValue;
    }
    return this;
  }

}

let list = new singlyLinkedList();
list.push("Sushil");
list.unshift("Hello");
list.push("John Doe");
// list.insert(1,"World");
// list.remove(4);
list = list.reverse();
while(list.head.next){
  console.log(list.head.val);
  list.head = list.head.next;
}
console.log(list.head.val);
