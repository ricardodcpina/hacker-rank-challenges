function findZigZagSequence(arr, n) {
    arr.sort((a, b) => a - b)

    let mid = (n - 1) / 2; // Primeira alteração
    let maxIdx = n - 1;
    [arr[mid], arr[maxIdx]] = [arr[maxIdx], arr[mid]]

    let st = mid + 1
    let end = n - 2 // Segunda alteração

    while (st <= end) {
        [arr[st], arr[end]] = [arr[end], arr[st]]
        st++
        end-- // Terceira alteração
    }

    console.log(...arr)
}


// def findZigZagSequence(a, n):
//     a.sort()
//     mid = int((n - 1)/2) 
//     a[mid], a[n-1] = a[n-1], a[mid]

//     st = mid + 1
//     ed = n - 2
//     while(st <= ed):
//         a[st], a[ed] = a[ed], a[st]
//         st = st + 1
//         ed = ed - 1

//     for i in range (n):
//         if i == n-1:
//             print(a[i])
//         else:
//             print(a[i], end = ' ')
//     return


let test = [1, 2, 3, 4, 5, 6, 7]
findZigZagSequence(test, test.length)

