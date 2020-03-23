let ar=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let left=0;
let right=ar.length-1;
let key=30;
let flag="false";
let mid=Math.floor((left+right)/2);


while(ar[mid]!==key && left<=right){
  console.log(left,mid,right);
if(ar[mid]<key){
    left=mid+1;
}
if(ar[mid]>key){
    right=mid-1;
}
mid=Math.floor((left+right)/2);
if(ar[mid]==key){
  flag="true";
}

}
//
console.log(flag);
