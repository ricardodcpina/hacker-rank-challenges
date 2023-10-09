/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    let permutArray_A = A.sort((a, b) => a - b)
    let permutArray_B = B.sort((a, b) => b - a)

    // console.log(permutArray_A, permutArray_B)

    for (let i = 0; i < A.length; i++) {

        // console.log(A[i], B[i], A[i] + B[i])
        if (A[i] + B[i] < k) return 'NO'
    }

    return 'YES'
}

console.log(twoArrays(10, [1, 4, 7], [6, 9, 3]))


