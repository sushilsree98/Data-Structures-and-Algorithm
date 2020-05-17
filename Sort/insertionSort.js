let ar=[1,25,3,2,8,5,9];
for(let i=1;i<ar.length;i++){
  let val=ar[i];
  let j=i-1;
  while(j>=0 && ar[j]>val){
    ar[j+1]=ar[j];
    j--;
  }
  ar[j+1]=val;
}


console.log(ar);
