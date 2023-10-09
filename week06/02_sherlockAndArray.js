/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {

    let startSum = 0
    let endSum = arr.reduce((acc, act) => acc + act)

    for (let i = 0; i < arr.length; i++) {

        if (endSum - startSum == arr[i]) {
            console.log(arr[i])
            return 'YES'
        }

        startSum += arr[i]
        endSum -= arr[i]
    }

    return 'NO'
}

let test = [5, 6, 8, 11]
console.log(balancedSums(test))