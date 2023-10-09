/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    let n = grid.length

    if (n == 1) return 'YES'

    grid = grid.map(row => {
        row = row.split('')
            .map(char => char.charCodeAt(0))
            .sort((a, b) => a - b)

        return row
    })

    // console.log(grid)

    let temp = false
    let fullyOrdered = grid.every((row, rowIdx) => {

        if (rowIdx < n - 1) {

            temp = row.every((code, codeIdx) => {
                let nextRow = grid[rowIdx + 1]
                let nextRowCode = nextRow[codeIdx]

                return code <= nextRowCode
            })
        }

        return temp
    })

    return fullyOrdered ? 'YES' : 'NO'
}

console.log(gridChallenge(['l']))
