// retuns "true" if n is an average of any one of the pair in a given array 

function averagePair(arr, n) {
       let left = 0;
       let right = arr.length-1;
       while (right>left) {
           avg = (arr[left] + arr[right]) / 2;
           console.log(arr[left], arr[right]);
           //console.log(avg);
           if (avg < n) {
               left++
           } else if (avg > n) {
               right--;

           } else {
               return true;
           }
       }
       return false;

   }
   console.log(averagePair([-1,0,3,4,5,6], 4.1));
