/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    const num = "0123456789"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const spec = "!@#$%^&*()-+"

    let hasNum = false
    let hasLow = false
    let hasUpp = false
    let hasSpChar = false
    let validChars = 0
    let minChars = 0

    for (let elem of password) {
        if (hasNum == false && num.includes(elem)) {
            hasNum = true
            validChars++
            console.log('Number')
        }
        else if (hasLow == false && lower.includes(elem)) {
            hasLow = true
            validChars++
            console.log('lowerCase')
        }
        else if (hasUpp == false && upper.includes(elem)) {
            hasUpp = true
            validChars++
            console.log('upperCase')
        }
        else if (hasSpChar == false && spec.includes(elem)) {
            hasSpChar = true
            validChars++
            console.log('specChar')
        }
    }

    minChars = 4 - validChars
    if (n < 6) minChars = Math.max(6 - n, minChars)

    return minChars
}

console.log(minimumNumber(5, '2a#2C'))