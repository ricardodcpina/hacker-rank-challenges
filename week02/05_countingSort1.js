/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    const freqArray = []

    for (let i = 0; i < 100; i++) {

        freqArray[i] = 0

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] == i) {
                freqArray[i]++
            }
        }
    }

    return freqArray
}

console.log(countingSort([1, 3, 4, 4, 4, 2, 0, 8]))

