function getTotalX(a, b) {
    let betweenIntegers = []
    let min = Math.min(...a)
    let max = Math.max(...b)

    for (let i = min; i <= max; i++) {
        let isDivisible = a.every(value => {
            // console.log(i, value)
            return i % value == 0
        })

        let isFactor = b.every(value => {
            // console.log(i, value)

            return value % i == 0
        })

        if (!isDivisible || !isFactor) continue
        else betweenIntegers.push(i); console.log (i, 'BETWEEN!')
    }

    return betweenIntegers.length
}

console.log(getTotalX([2, 4], [16, 32, 96]))
