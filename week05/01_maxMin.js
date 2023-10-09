/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    let tempUnfair = 0
    arr = arr.sort((a, b) => a - b)
    let minUnfair = arr[arr.length - 1] - arr[0]

    for (let i = 0; i <= arr.length - k; i++) {
        let newArr = arr.slice(i, i + k)

        tempUnfair = newArr[newArr.length - 1] - newArr[0]
        if (tempUnfair < minUnfair) minUnfair = tempUnfair
    }

    return minUnfair
}

let test = [1, 2, 3, 5, 10, 11, 12, 13, 30, 40, 100, 200]

console.log(maxMin(4, test))

