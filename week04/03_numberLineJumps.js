/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    let numberOfJumps = (x1 - x2) / (v2 - v1)
    let jumpIsInteger = (x1 - x2) % (v2 - v1) == 0
    let jumpIsPositive = x1 - x2 > 0 && v2 - v1 > 0 ||
         x1 - x2 < 0 && v2 - v1 < 0
    
    if (jumpIsInteger && jumpIsPositive) return 'YES'

    return 'NO'
}

// console.log(kangaroo(4, 1, 2, 2))
console.log(kangaroo(21, 6, 47, 3))

