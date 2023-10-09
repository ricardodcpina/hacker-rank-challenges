
/*
 * Complete the 'fibonacciModified' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */

function fibonacciModified(t1, t2, n) {
    let tempArray = []
    tempArray.push(t1, t2)

    for (let i = 0; i < n - 2; i++) {
        let nextElem = BigInt(tempArray[i]) + BigInt(BigInt(tempArray[i + 1]) ** 2n)
        tempArray.push(nextElem)
    }
    
    return tempArray[n - 1]
}

console.log(fibonacciModified(0, 1, 5))