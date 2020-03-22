function reverse(str){
    let ar=[]
    if(str.length==0){
        return;
    }
    ar.push(str[str.length-1]);
    ar=ar.concat(reverse(str.slice(0,str.length-1)));
    return ar.join('');

}
