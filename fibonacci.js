/*

fibonacci sequences

This is a JavaScript implementation of the Fibonacci sequence, using memoization for optimization. The function takes an argument "n" which specifies the term in the sequence to calculate. It uses a cache (memo) to store the intermediate results, so that repeated calculations can be avoided. The function returns the nth term of the Fibonacci sequence.

*/

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))
