function findMedian(arr) {
    let ascArray = arr.sort((a , b) => a - b) // faltou definir os parâmetros para a ordenação funcionar com dígitos de 2 ou mais casas
    let ascArrayLength = ascArray.length
    let medianIndex = Math.floor(ascArrayLength / 2 )

    console.log(ascArray, ascArrayLength, medianIndex)
    return ascArray[medianIndex]
}

console.log(findMedian([1, 6, 3, 5, 2, 4, 7, 8, 9, 9, 11]))