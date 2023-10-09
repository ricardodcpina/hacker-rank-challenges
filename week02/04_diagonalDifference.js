/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let mainDiagonalSum = 0
    let secDiagonalSum = 0

    mainDiagonalSum = arr.reduce((acc, actual, ind) => {
        // console.log(acc, actual, actual[ind])
        acc += actual[ind]
        return acc
    }, 0)

    secDiagonalSum = arr.reduce((acc, actual, ind) => {
        // console.log(acc, actual, actual[actual.length - 1 - ind])
        acc += actual[actual.length - 1 - ind]
        return acc
    }, 0)

    let absoluteDiff = Math.abs(mainDiagonalSum - secDiagonalSum)

    return absoluteDiff

// for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {

    //         if (i == j) {
    //             mainDiagonalSum += arr[i][i]
    //             // console.log(mainDiagonalSum)
    //         }
    //         if (j == arr.length - 1 - i) {
    //             secDiagonalSum += arr[i][j]
    //             // console.log(secDiagonalSum)
    //         }
    //     }
    // }

    // return Math.abs(mainDiagonalSum - secDiagonalSum)

}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(diagonalDifference(matrix))