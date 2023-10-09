/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let matchingSocks = 0
    let checkedSocks = []

    for (let i = 0; i < n; i++) {
        let sameSockQuantity = 0

        if (!checkedSocks.includes(ar[i])) {

            checkedSocks.push(ar[i])

            for (let j = 0; j < n; j++) {

                if (ar[j] == ar[i]) sameSockQuantity++
            }

            matchingSocks += Math.floor(sameSockQuantity / 2)

            console.log(i, ar[i], checkedSocks, sameSockQuantity, matchingSocks)
        }
    }

    return matchingSocks
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))