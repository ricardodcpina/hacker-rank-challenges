/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {

    arr = arr.sort((a, b) => a - b)
 
    let absDiffArr = arr.map((a, ind) => {
        a = Math.abs(a - arr[ind + 1])
        return a
    })

    absDiffArr.pop()
    let minDiff = Math.min(...absDiffArr)

    return minDiff
}

let test = [-2, 2, 4]
console.log(minimumAbsoluteDifference(test))