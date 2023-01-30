/*

CanSum

This is a JavaScript function that implements a top-down approach for solving the problem of finding whether a given target sum can be obtained by adding up some of the elements in a given array of numbers. The function uses memoization to store previously computed values to avoid redundant computations and improve performance. The function takes three parameters:

targetSum: the target sum to be achieved
numbers: the array of numbers to be used for addition
memo (optional): an object used to store the result of previously computed values.
The function returns a boolean value indicating whether the target sum can be obtained by adding up some of the elements in the given array of numbers.


*/

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false

    for (let num of numbers) {
        const remainder = targetSum - num
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 4]))
console.log(canSum(8, [2, 3, 5]))
console.log(canSum(300, [7, 14]))
console.log(canSum(23390, [7, 14, 23, 1326, 3467, 2736427]))
