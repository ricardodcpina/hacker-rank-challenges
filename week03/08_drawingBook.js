/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    const totalBookTurns = Math.floor(n / 2)
    const startToHalfTurns = Math.floor(p / 2)
    const endToHalfTurns = totalBookTurns - startToHalfTurns

    return Math.min(startToHalfTurns, endToHalfTurns)
}

console.log(pageCount(6, 3))