const isOdd = val => val % 2 !== 0;

function recurse(arr,fn){
    if(arr.length==0){
        return false;
    }
    if(fn(arr[0])){
        return true;
    }
   return recurse(arr.slice(1),fn);
}
