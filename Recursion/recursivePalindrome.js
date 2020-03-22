function isPalindrome(str){
    function recurse(val){
        let ar=[];
        if(val.length==0){
            return;
        }
        ar.push(val[val.length-1]);
        ar=ar.concat(recurse(val.slice(0,val.length-1)));
        return ar.join('');
    }
   if(recurse(str)===str) {return true} else {return false};
}
