function merge(arr1,arr2){
  let ar=[];
  let i=0,j=0;
  while(i<arr1.length || j< arr2.length){
    if(arr1[i]<=arr2[j] || arr2[j]==undefined){
      ar.push(arr1[i]);
      i++;
    }else if(arr2[j]<arr1[i] || arr1[i]==undefined){
      ar.push(arr2[j]);
      j++;
    }
  }
  return ar;
}

function mergeSort(arr){
  if(arr.length<=1) return arr;
  let mid=Math.floor(arr.length/2);
  let left=mergeSort(arr.slice(0,mid));
  let right=mergeSort(arr.slice(mid));
    return merge(left,right);
}

console.log(mergeSort([1,6,2,9,3,8,4]));
