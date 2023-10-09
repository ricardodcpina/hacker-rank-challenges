/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let altitudeLevel = 0
    let valleyCount = 0

    for (let i = 0; i < steps; i++) {

        if (path[i] == 'U') {
            if (altitudeLevel == -1) valleyCount++
            altitudeLevel++
            // console.log(altitudeLevel, valleyCount)
        } 

        if (path[i] == 'D') {altitudeLevel--
            // console.log(altitudeLevel, valleyCount)
        }
    }

    return valleyCount
}

console.log(countingValleys(8, 'DDUUUUDD'))