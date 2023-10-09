/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let splitString = s.split(':')
    let splitHours = splitString[0]
    let hours = Number(splitHours)

    if (s.includes('PM') && hours != 12) {
        hours += 12
        splitString[0] = hours.toString()
    }
    else if (s.includes('AM') && hours == 12) {
        hours = 0
        splitString[0] = '0' + hours.toString()
    }

    let newTimeFormat = splitString.join(':').slice(0, 8)
    return newTimeFormat
}

console.log(timeConversion('06:40:22AM'))
