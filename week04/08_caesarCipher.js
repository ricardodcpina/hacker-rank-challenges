/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    k = k % 26
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt(0)
        let cipherCharCode = undefined

        if (charCode >= 97 && charCode <= 122) {
            if (charCode + k > 122) cipherCharCode = 96 + (charCode + k - 122)
            else cipherCharCode = charCode + k
        }

        if (charCode >= 65 && charCode <= 90) {
            if (charCode + k > 90) cipherCharCode = 64 + (charCode + k - 90)
            else cipherCharCode = charCode + k
        }

        let cipherChar = String.fromCharCode(cipherCharCode)

        if (cipherCharCode != undefined) s[i] = cipherChar
    }

    return s.join('')
}

console.log(caesarCipher('159357lcfd', 98))

// console.log('Z'.charCodeAt(0))