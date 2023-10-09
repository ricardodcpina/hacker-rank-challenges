/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    let loneInt = 0

    for (let i = 0; i < a.length; i++) {
        let numFreq = 0
        for (let j = 0; j < a.length; j++) {
            if (a[j] == a[i]) numFreq++
            // console.log(a[i], a[j], numFreq)
        }
        if (numFreq == 1) loneInt = a[i]
    }

    return loneInt

}

console.log(lonelyinteger([1, 2, 1, 3, 2]))
