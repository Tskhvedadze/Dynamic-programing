/*

Gridtraveler

This is a JavaScript function that implements a top-down approach for solving the problem of counting the number of ways to reach the bottom-right corner of a grid from the top-left corner. The function uses memoization to store previously computed values to avoid redundant computations and improve performance. The function takes three parameters:

m: the number of rows in the grid
n: the number of columns in the grid
memo (optional): an object used to store the result of previously computed values.
The function returns the number of ways to reach the bottom-right corner of the grid from the top-left corner.


*/

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
