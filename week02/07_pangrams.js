/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'
    
    s = s.toLowerCase()

    for (let letter of alphabetArray) {
        // console.log(letter)
        if (!s.includes(letter)) return 'not pangram'
    }

    return 'pangram'
}

console.log(pangrams('The quick brown fox jumps over the lazy dog'))




