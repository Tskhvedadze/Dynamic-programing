/*
memoization
 js object, Keys will be arg to fn, value will the be return value
Fibonacci sequence : 

This is a JavaScript function that calculates the nth Fibonacci number using memoization. The function takes an input "n", which represents the position of the Fibonacci number to be calculated. It also takes an optional parameter "memo", which is an empty object used to store previously calculated Fibonacci numbers to avoid redundant calculations. The function uses a recursive approach, where it checks if the input "n" is in the memo object. If it is, it returns the value stored in the memo object. If not, it checks if "n" is less than or equal to 2. If it is, it returns 1. If not, it calculates the nth Fibonacci number by adding the (n-1)th and (n-2)th Fibonacci numbers and stores the result in the memo object, before returning the result.


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


// Gridtraveler
const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))

*/
