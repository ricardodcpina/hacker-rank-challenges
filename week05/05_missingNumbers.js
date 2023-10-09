/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    let missingNumArr = []

    arr = arr.sort((a, b) => a - b)
    brr = brr.sort((a, b) => a - b)

    for (let i = 0; i < brr.length; i++) {

        if (brr[i] != arr[i]) {
            missingNumArr.push(brr[i])
            arr = arr.slice(i)
            brr = brr.slice(brr.lastIndexOf(brr[i]) + 1)
            i = -1
        }
    }

    return missingNumArr
}

let arr = [203, 203, 204, 204, 205, 205, 206, 206, 207, 208]
let brr = [203, 203, 204, 204, 204, 205, 205, 205, 206, 206, 206, 207, 208]

console.log(missingNumbers(arr, brr))