/*
* Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {

    let firstNumber = s[0]
    let tempNumber = firstNumber

    for (let j = 1; tempNumber.length <= Math.floor(s.length / 2); j++) {
        for (let i = 1; tempNumber.length < s.length; i++) {
            let nextElement

            if (Number(firstNumber) >= Number.MAX_SAFE_INTEGER) {
                nextElement = BigInt(firstNumber) + 1n
            } else {
                nextElement = Number(firstNumber) + i
            }

            tempNumber += nextElement.toString()

            if (!(s.indexOf(tempNumber) == 0)) {
                firstNumber += s[j]
                tempNumber = firstNumber
                break
            }

            if (tempNumber == s) {
                console.log(`YES ${firstNumber}`)
                return
            }
        }
    }

    console.log('NO')
}

let test = '84137510565804148413751056480415'
separateNumbers(test)

/* 
51073756645096775107375664509678
51073756645096775107375664509668
96589218797811259658921879781126
96589218797811259658921879781026
960567818611458960567818611459
960567818611458960567818610459
65651460403999656565146040399966
65651460403999656565146040389966
84137510565804148413751056580415
84137510565804148413751056480415
*/