function productOfArray(arr){
   if(arr.length==0){
       return;
   }
   return arr[0]*productOfArray(arr.slice(1));
}
