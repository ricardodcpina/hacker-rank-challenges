/*
 * Complete the 'sansaXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function sansaXor(arr) {
    let size = arr.length
    let result = 0

    if (size % 2 != 0) {
        result =
            arr.reduce((acc, act, ind) => {
                if (ind % 2 == 0)
                    acc = acc ^ act;
                return acc
            }, 0)
    }
    return result
}


console.log(sansaXor([98, 74, 12]))
console.log(sansaXor([50, 13, 2]))
console.log(sansaXor([1, 2, 3]))
console.log(sansaXor([4, 5, 7, 5]))

//console.log(1 ^ 2 ^ 3 ^ 4 ^ 5 ^ 6 ^ 7 ^
//     (1 ^ 2) ^ (2 ^ 3) ^ (3 ^ 4) ^ (4 ^ 5) ^ (5 ^ 6) ^ (6 ^ 7) ^
//     (1 ^ 2 ^ 3) ^ (2 ^ 3 ^ 4) ^ (3 ^ 4 ^ 5) ^ (4 ^ 5 ^ 6) ^ (5 ^ 6 ^ 7) ^
//     (1 ^ 2 ^ 3 ^ 4) ^ (2 ^ 3 ^ 4 ^ 5) ^ (3 ^ 4 ^ 5 ^ 6) ^ (4 ^ 5 ^ 6 ^ 7) ^
//     (1 ^ 2 ^ 3 ^ 4 ^ 5) ^ (2 ^ 3 ^ 4 ^ 5 ^ 6) ^ (3 ^ 4 ^ 5 ^ 6 ^ 7) ^
//     (1 ^ 2 ^ 3 ^ 4 ^ 5 ^ 6) ^ (2 ^ 3 ^ 4 ^ 5 ^ 6 ^ 7) ^
//     (1 ^ 2 ^ 3 ^ 4 ^ 5 ^ 6 ^ 7))
// console.log(1 ^ 7 ^ 3 ^ 5)

// 1111111
// 222222222222
// 333333333333333
// 4444444444444444
// 555555555555555
// 666666666666
// 7777777

// 7 - 12 - 15 - 16 - 15 - 12 - 7


// 50 13 2

// 11111
// 22222222
// 333333333
// 44444444
// 55555

// 5 - 8 - 9 - 8 - 5

// 1 : 50 50 50
// 2 : 13 13 13 13
// 3 : 2 2 2

// 3 - 4 - 3

