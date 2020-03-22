function collectOdd(num){
    let ar=[];

    function findOdd(arr){
        if(arr.length===0){
            return;
        }
        if(arr[0]%2!==0){
            ar.push(arr[0]);
        }
       findOdd(arr.slice(1));
    }
    findOdd(num);
    return ar;
}
