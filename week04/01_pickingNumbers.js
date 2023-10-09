/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {    
    let subarrays = []
    let startIndex = 0
    a = a.sort((a, b) => a - b)

    a.reduce((acc, act, ind) => {
        let absDiff = Math.abs(act - acc)

        if (absDiff > 1) {
            subarrays.push(a.slice(startIndex, ind))
            startIndex = ind
            acc = a[ind]
        }

        if (ind == a.length - 1) {
            subarrays.push(a.slice(startIndex))
        }

        return acc
    })

    let maxSubarrayLength = subarrays.reduce((acc, act) => {
        if (act.length > acc) acc = act.length
        return acc
    }, 0)

    console.log(subarrays)
    return maxSubarrayLength
}

let test = [1, 1, 2, 2, 4, 4, 5, 5, 5, 7, 7, 7, 8, 8, 9, 11]

console.log(pickingNumbers(test))