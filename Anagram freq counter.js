//input:
//   hello
//   lolhe
//output:
//    true

let freqCounter1={};
    let freqCounter2={};
    function same(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    for(let key of str1){
       freqCounter1[key]=++freqCounter1[key] || 1;
    }
    for(let key of str2){
        freqCounter2[key]=++freqCounter2[key] || 1;
    }
    console.log(freqCounter1,freqCounter2);

    for(let key in freqCounter1){
        if(!(key in freqCounter2)){
            return false;
        }
        if(freqCounter2[key]!==freqCounter1[key]){
            return false;
        }
    }
   return true;
}
console.log(same("hello","helol"));
