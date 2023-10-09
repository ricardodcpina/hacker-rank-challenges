/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function miniMaxSum(arr) {
    let maxSum = 0
    let minSum = 0

    for (let index in arr) {
        let sumFour = []
        let sum = 0

        sumFour = arr.filter((element, currentIndex) =>
            currentIndex != index)

        for (let num of sumFour) {
            sum += num
        }

        if (sum > maxSum) maxSum = sum
        if (sum < minSum || minSum == 0) minSum = sum

    }

    console.log(minSum, maxSum)

}

miniMaxSum([5, 5, 5, 5, 5])