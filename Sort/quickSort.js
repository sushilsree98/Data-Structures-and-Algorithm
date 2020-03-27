function pivot(ar,start=0,end=ar.length-1){
  let pivot=ar[start];
  let cnt=start;
  for(let i=start+1;i<=end;i++){
    if(pivot>ar[i]){
       cnt++;
      [ar[cnt],ar[i]]=[ar[i],ar[cnt]];
    }
  }
  [ar[start],ar[cnt]]=[ar[cnt],ar[start]];
  return cnt;
}

function quickSort(arr,left=0,right=arr.length){
  if(left<right){
  let pivotIndex=pivot(arr,left,right);
  //left
  quickSort(arr,left,pivotIndex-1);
  //right
  quickSort(arr,pivotIndex+1,right);
  }

  return arr;
}

console.log(quickSort([9,4,8,2,1,5,7,6,3]));
