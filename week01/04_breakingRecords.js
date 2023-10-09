/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let mostPtRecordCount, leastPtRecordCount,
        maxScore, minScore

    minScore = maxScore = scores[0]
    mostPtRecordCount = leastPtRecordCount = 0

    scores.reduce((scoreArray, actualScore) => {
        scoreArray = [maxScore, minScore]

        if (actualScore > maxScore) {
            maxScore = actualScore
            mostPtRecordCount++
        }

        if (actualScore < minScore) {
            minScore = actualScore
            leastPtRecordCount++
        }

        return scoreArray

    })

    return [mostPtRecordCount, leastPtRecordCount]
}

console.log(breakingRecords([8, 5, 19, 13, 13, 2, 24, 18]))

