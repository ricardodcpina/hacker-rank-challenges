/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    let lastAnswer = 0
    let answers = []
    let twoDArray = new Array(n)

    twoDArray = [...twoDArray].map(elem => [])   
  
    queries.forEach(query => {
        let [type, x, y] = query
        let idx = ((x ^ lastAnswer) % n)

        if (type == 1) {
            twoDArray[idx].push(y)
        }

        else {
            lastAnswer = twoDArray[idx][y % twoDArray[idx].length]
            answers.push(lastAnswer)
        }
    })

    return answers
}

console.log(dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]))