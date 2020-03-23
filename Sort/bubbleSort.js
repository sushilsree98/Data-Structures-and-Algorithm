let ar=[2,7,84,2,4,7,26,8];
let noswap;

for(let i=ar.length;i>0;i--){
  noswap=true;
  for(let j=0;j<i-1;j++){
    if(ar[j]>ar[j+1]){
      [ar[j],ar[j+1]]=[ar[j+1],ar[j]];
      noswap=false
    }
  }
}

console.log(ar);
