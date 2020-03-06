let frequencyCounter1={};
let frequencyCounter2={};

console.log(same([1,2,3,3],[1,9,4,9]));
function same(ar1,ar2){
if(ar1.length !== ar2.length){
    return false;
}
for (let key of ar1){
    frequencyCounter1[key]=++frequencyCounter1[key] || 1;
}
for(let key of ar2){
    frequencyCounter2[key]=++frequencyCounter2[key] || 1;
}

for(let key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
        return false;
    }
    else if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
        return false;
    }

}
return true;
}
