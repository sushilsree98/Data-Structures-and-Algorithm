let ar=[2,5,3,1,6,2,7,9];

for(let i=0;i<ar.length;i++){
  let min = i;
  for(let j=i+1;j<ar.length;j++){
    if(ar[j]<ar[min]){
      min=j;
    }
  }
    if(i!==min)[ar[min],ar[i]]=[ar[i],ar[min]];
}

console.log(ar);
