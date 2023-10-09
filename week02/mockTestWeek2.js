/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    let maxSumSubmatrix = 0
    let n = matrix.length

    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {

            maxSumSubmatrix += Math.max(matrix[i][j], matrix[n - 1 - i][j],
                matrix[i][n - 1 - j], matrix[n - 1 - i][n - 1 - j])
            // console.log(maxSumSubmatrix)
        }
    }

    return maxSumSubmatrix
}

console.log(flippingMatrix([[3, 2, 11, 14, 77, 2], [3, 4, 30, 22, 54, 25], [111, 23, 54, 2, 0, 44],
[15, 87, 3, 25, 65, 32], [54, 22, 76, 43, 11, 90], [67, 33, 52, 73, 9, 11]]))