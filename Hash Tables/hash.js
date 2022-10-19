function hash(key, arraylen){
    const prime = 31;
    let total = 0
    for(let i=0; i < Math.min(key.length, 100); i++){
        let ch = key[i];
        let value = key[i].charCodeAt(0) - 96;
        total = (total * prime + value) % arraylen
    }
    return total
}
