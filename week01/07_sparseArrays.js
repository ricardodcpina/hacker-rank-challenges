/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    let queryArray = new Array(3)
    queryArray.fill(0, 0, queries.length)

    for (let i = 0; i < queries.length; i++) {
        let queryMatches = 0

        for (let j = 0; j < strings.length; j++) {

            const exactString = new RegExp(`^${strings[j]}$`)
            if (queries[i].match(exactString)) {
                queryArray[i] = ++queryMatches
            }
        }
    }

    return queryArray

}

console.log(matchingStrings(['alo', 'bola', 'casa', 'alo', 'alo', 'bola'], ['alo', 'bola', 'cachorro']))