class MaxBinaryHeap{
    constructor(value){
        this.value = [94,86, 45, 72, 65, 36, 24]
    }

    insert(element){
        this.value.push(element)
        this.bubbleUp()
    }

    bubbleUp(){
        let index = this.value.length - 1
        let current = this.value[index]
        while(index > 0){
            let parentIdx =  Math.floor((index - 1)/2)
            let parent = this.value[parentIdx];
            if(current <= parent) break;
            this.value[index] = parent;
            this.value[parentIdx] = current;
            index = parentIdx
        }
    }

    extractMax(){
       let max = this.value[0];
       let end = this.value.pop();
       if(this.value.length > 0){
           this.value[0] = end;
           this.bubbleDown()
       }else{
           return max
       }
   }

   bubbleDown(){
       let idx = 0
       let length = this.value.length;
       let current = this.value[0]
       while(true){
           let leftChildIndex = 2 * idx + 1;
           let rightChildIndex = 2 * idx + 2;
           let leftChild, rightChild;
           let swap = null;

           if(leftChildIndex < length){
               leftChild = this.value[leftChildIndex];
               if(leftChild > current) swap = leftChildIndex;
           }

           if(rightChild < length){
               rightChild = this.value[rightChildIndex]
               if(
                   (swap == null && rightChild > current) ||
                   (swap != null && rightChild > leftChild)
               ){
                   swap = rightChildIndex
               }
           }
           
           if(swap == null) break;
           this.value[idx] = this.value[swap];
           this.value[swap] = current
           idx = swap
       }
   }
}
