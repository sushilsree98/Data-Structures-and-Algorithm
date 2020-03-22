function pureRecurse(arr){
    let newArr=[];
    if(arr.length==0){
        return;
    }
    if(arr[0]%2!==0){
        newArr.push(arr[0]);
    }
    return newArr.concat(pureRecurse(arr.slice(1)));

}
