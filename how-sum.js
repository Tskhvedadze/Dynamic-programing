/*

howSum

This is a JavaScript function that implements the concept of memoization to solve the problem of finding all the combinations of numbers in an array that add up to a target sum. The function takes three parameters:

targetSum: The target sum that the combinations of numbers should add up to.
numbers: An array of numbers to use in finding the combinations.
memo (optional): An object that stores previously computed solutions to avoid redundant computation.
The function uses a recursive approach, where it first checks if the solution to the current targetSum has already been computed and stored in the memo object. If it has, the solution is returned. If the targetSum is 0, an empty array is returned, signifying that a combination has been found. If the targetSum is negative, it means that the current combination of numbers cannot add up to the target sum, and null is returned.

Finally, the function loops through each number in the numbers array, subtracts it from the targetSum, and calls itself with the new remainder value. If a solution is found, the current number is added to the solution, stored in the memo object, and returned. If no solution is found for the current targetSum, null is stored in the memo object and returned.


*/

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return null
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(300, [7, 14]))
console.log(howSum(100, [7, 14, 23, 1326, 3467, 2736427]))
