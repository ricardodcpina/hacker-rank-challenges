/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    let wrongLetterCounter = 0

    for (let i = 0; i < s.length; i++) {
        let isPositionOf_O = (i - 1) % 3 == 0
        let isPositionOf_S = !isPositionOf_O

        if (isPositionOf_O && s[i] != 'O') {
            console.log(s[i], i)
            wrongLetterCounter++
            continue
        }
        if (isPositionOf_S && s[i] != 'S') {
            console.log(s[i], i)
            wrongLetterCounter++
        }
    }

    return wrongLetterCounter
}

console.log(marsExploration('SOSSOT'))
