/*

Write a function that accepts a target string and an array of strings.

The function should return a 2D array caontaining 
all of the ways that the 'target' can be constructed by 
concatenating alements of the 'wordBank' array.

Each element of the 2D array should represent
one combination that constructs the 'target'

You may reuse elements of 'wordBank' as many times as needed.

*/

function allConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return [[]]

    const result = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map((way) => [word, ...way])
            result.push(...targetWays)
        }
    }

    memo[target] = result
    return memo[target]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) //[ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(
    allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']),
) //[
// [ 'ab', 'cd', 'ef' ],
// [ 'ab', 'c', 'def' ],
// [ 'abc', 'def' ],
// [ 'abcd', 'ef' ]
//  ]
console.log(
    allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']),
) // []
console.log(
    allConstruct(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz',
        ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
    ),
) //[]
