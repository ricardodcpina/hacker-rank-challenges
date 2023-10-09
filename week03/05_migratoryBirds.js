/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {

    const freqArray = new Array(5).fill(0)
    const birdIDFreq = birdID => freqArray[birdID - 1]++
    
    arr.forEach(birdIDFreq)
    
    const higherFreq = Math.max(...freqArray)
    const mostFreqBirdID = freqArray.indexOf(higherFreq) + 1

    // console.log(freqArray, higherFreq, mostFreqBirdID)

    return mostFreqBirdID 
    
}

let testArr = [1, 1, 2, 2, 2, 3, 2, 1, 3, 3, 4, 4, 4, 4, 4, 5]
console.log(migratoryBirds(testArr))