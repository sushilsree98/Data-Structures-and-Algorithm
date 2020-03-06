function areThereDuplicates(...ar) {
    ar.sort();
    let start=0;
    let end=1;
    while(end<ar.length){
        if(ar[start]!==ar[end]){
            start=end;
            end++;
        }else if(ar[start]==ar[end]){
            return true;
        }

    }
    return false;
}

console.log(areThereDuplicates('a','b','c','a'));
