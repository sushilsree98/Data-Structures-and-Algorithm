function unique(arr){
       let left=0;
       let right=1;
       let val=1;

       while(right<arr.length-1){
           if(arr[left]==arr[right]){
               right++;
           }else if(arr[left]!=arr[right]){
               left=right;
               val++;
           }
       }
       console.log(val);
   }

   unique([1,1,1,2,2,2,2,3,4,4,4,10,10]);//5 unique values are there
