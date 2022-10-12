class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp()
    }

    bubbleUp(){
        let index = this.values.length - 1;
        let element =  this.values[index]
        while(index > 0){
            let parentIdx = Math.floor((index - 1)/2)
            let parentElement = this.values[parentIdx];
            if(parentElement.priority >= element.priority ) break;
            this.values[index] = parentElement;
            this.values[parentIdx] = element;
            index = parentIdx;
        }
    }

    dequeue(){
        let max = this.values[0];
        let element = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = element;
            this.bubbleDown()
        }
        return max;
    }

    bubbleDown(){
        let index = 0;
        const length = this.values.length;
        const element = this.values[0]
        while(true){
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let left, right;
            let swap = null;

            if(leftIndex < length){
               left = this.values[leftIndex];
               if(left.priority > element.priority) swap = leftIndex;
           }

           if(rightIndex < length){
               right = this.value[rightIndex]
               if(
                   (swap == null && right.priority > current.priority) ||
                   (swap != null && right.priority > leftChild.priority)
               ){
                   swap = rightIndex
               }
           }
             if(swap == null) break;
           this.value[idx] = this.value[swap];
           this.value[swap] = current
           idx = swap
        }
    }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority
    }
}

let ER = new PriorityQueue()
ER.enqueue("common cold", 1)
ER.enqueue("gunshot wound", 5)
ER.enqueue("high fever", 2)
console.log(ER)
