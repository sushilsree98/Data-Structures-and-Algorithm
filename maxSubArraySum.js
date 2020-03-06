//maxSubArraySum(array,window_size)

function maxSubArraySum(arr,num){
       if(arr.length<num){
           return null;
       }
       let sum=0;
       let temp=0;
       for(let i=0;i<num;i++){
           sum+=arr[i];
       }
       temp=sum;
       for(let i=num;i<arr.length;i++){
           temp=temp-arr[i-num]+arr[i];
           sum=Math.max(temp,sum);
       }
       return sum;
   }
   console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20],2));
