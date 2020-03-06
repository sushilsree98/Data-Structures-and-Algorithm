// function isSubsequence(str1,str2){
//         if(str1.length>str2.length){
//             return false;
//         }
//         let left=0;
//         let right=0;
//         while(right<str2.length){
//             if(str1[left]===str2[right]){
//                 left++;
//                 if(left>str1.length){
//                     return false;
//                 }
//             }
//             right++;
//         }
//         if(left<str1.length){
//             return false;
//         }
//         return true;

//     }

//     console.log(isSubsequence("sing","sting"));

       function isSubsequence(str1,str2){
           if(str1.length===0) return true;
           if(str2.length===0) return false;
           if(str1[0]==str2[0]) return(isSubsequence(str1.slice(1),str2.slice(1)));
           return isSubsequence(str1,str2.slice(1));
       }

       console.log(isSubsequence("sing","sting"));
