/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    let possibleWaysToDivide = 0
    // console.log(s)

    for (let i = 0; i < s.length; i++) {
        let partialSum = 0

        for (let j = 0; j < m; j++) {
            partialSum += s[i + j]
            // console.log('i :' + i, 'j : ' + j, 'partialSum: ' + partialSum)
        }

        if (partialSum == d) {
            possibleWaysToDivide++

            // console.log(i, partialSum, 'ways :' + possibleWaysToDivide)
        }
    }

    return possibleWaysToDivide
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))