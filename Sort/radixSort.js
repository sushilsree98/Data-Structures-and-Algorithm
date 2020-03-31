function getDigit(num,index){
   return Math.floor(Math.abs(num)/Math.pow(10,index))%10;
}

function digitCount(num){
    if(num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(arr){
    let max=digitCount(arr[0])
    for(let i=1;i<arr.length;i++){
        if(digitCount(arr[i])>max){
            max=digitCount(arr[i]);
        }
    }
    return max;
}

function radixSort(arr){
    let maxDigit=mostDigits(arr);
    for(let i = 0; i < maxDigit ;i++){
      let digitBucket=Array.from({length:10},()=>[]);
      for(let j = 0;j < arr.length;j++){
          let digit = getDigit(arr[j],i);
          digitBucket[digit].push(arr[j]);
      }
      arr=[].concat(...digitBucket);
    }

   return arr;
}

console.log(radixSort([2,4,1,12245,67,2]));
