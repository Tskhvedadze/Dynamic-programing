/*

Write a function that takes in a targetSum 
and array of numbers as arguments

The function return an array containing the shortest 
combination of numbers that up to exactly the target

If there is a tie for the shortest combination, 
you may return any one of the shortest.

examples : 
   bestSum(7,[5,3,4,7]) => shortest combination is [7]
   bestSum(8,[2,3,5]) => [2,2,2,2] or [2,3,3] or [3,5] - shortest 
                        combination is [3,5] because 3 + 5 = 8

*/

function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder, numbers, memo)
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num]
            // if the combination is shortest than the current 'shortest' ,update it
            if (
                shortestCombination === null ||
                combination.length < shortestCombination.length
            ) {
                shortestCombination = combination
            }
        }
    }

    memo[targetSum] = shortestCombination
    return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7])) //[7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) //[25, 25, 25]
