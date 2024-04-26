function fib(n, memo = []){
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return n;
    let res = fib(n - 1, memo ) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

function fibn(n) {
    if(n < 2) return 1;
    const fib = [0, 1, 1];
    for(let i = 3; i <= (n + 1); i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n + 1]
}

console.log(fibn(5))
console.log(fib(5))