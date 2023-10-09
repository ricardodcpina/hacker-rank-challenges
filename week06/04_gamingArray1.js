/*
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function gamingArray(arr) {
    let possibleTurns = 1
    let maxNum = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            possibleTurns++
            maxNum = arr[i]
        }
    }

    return possibleTurns % 2 == 0 ? 'ANDY' : 'BOB'
}

// const test = [2, 3, 5, 4, 1]
const test = [5, 2, 6, 3, 4]
console.log(gamingArray(test))