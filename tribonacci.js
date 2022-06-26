//----- final kata ----- 

function tribonacci(signature, n) {
    for (let i = 0; i < n - 3; i++) {
        signature.push(signature.slice(-3).reduce((a, b) => a + b));
    }
    return n < 3 ? signature.slice(0, n - 3) : signature;
}

console.log(tribonacci([3, 2, 1], 10)); // should equal [3,2,1,6,9,16,31,56,103,190]