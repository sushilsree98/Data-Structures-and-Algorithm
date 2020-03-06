let win=1;
   function minSubArrayLen(arr,n){
       let sum=0;
      for(let i=0;i<win;i++){
       sum+=arr[i];
      }
      for(let i=win;i<arr.length;i++){
       sum=sum-arr[i-win]+arr[i];
       if(sum>=n){
           console.log(win);
           return win;
       }
      }
     if(win<arr.length){
         win++;
         minSubArrayLen(arr,n);
     }else{
     return 0;
     }

   }
  console.log (minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
