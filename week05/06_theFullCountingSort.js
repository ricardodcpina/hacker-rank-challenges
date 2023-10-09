/*
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {

    arr = arr.map(([x, str], idx) => {
        if (idx < arr.length / 2) str = '-'
        return [x, str]
    })

    arr = arr.sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    arr = arr.map(a => a[1])

    // console.log(...arr) -> doesn't work with spread
    console.log(arr.join(' '))
}

let test = [['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'], ['4', 'ij'], ['0', 'ab'], ['6', 'cd'], ['0', 'ef'], ['6', 'gh'],
['0', 'ij'], ['4', 'that'], ['3', 'be'], ['0', 'to'], ['1', 'be'], ['5', 'question'], ['1', 'or'], ['2', 'not'], ['4', 'is'], ['2', 'to'], ['4', 'the']]

countSort(test)