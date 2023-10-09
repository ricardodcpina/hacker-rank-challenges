/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let length = arr.length
    let posNum, negNum, zeroNum
    posNum = negNum = zeroNum = 0

    for (let num of arr) {
        if (num > 0) posNum++
        else if (num < 0) negNum++
        else zeroNum++
    }

    console.log((posNum / length).toFixed(6) + '\n'
        + (negNum / length).toFixed(6) + '\n'
        + (zeroNum / length).toFixed(6))
}

plusMinus([1, 2, 3, 0, -2, -2])