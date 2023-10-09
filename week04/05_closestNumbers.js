/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    let closestPairs = []

    arr = arr.sort((a, b) => a - b)
 
    let absDiffArr = arr.map((a, ind) => {
        a = Math.abs(a - arr[ind + 1])
        return a
    })

    absDiffArr.pop()
    let minDiff = Math.min(...absDiffArr)

    absDiffArr.forEach((a, ind) => {
        if (a == minDiff) {
            closestPairs.push(arr[ind], arr[ind + 1])
        }
    }) 

    return closestPairs
}

let test = [5, 4, 3, 2]
console.log(closestNumbers(test))
