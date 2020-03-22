let x=[];
function capitalizeFirst(arr){
    if(arr.length===0){
        return x;
    }
    let val=arr[0];
    val=val.split('');
    val[0]=val[0].toUpperCase();
    x.push(val.join(''));
    return capitalizeFirst(arr.slice(1));
}
