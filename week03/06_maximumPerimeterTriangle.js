/*
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    const validTriangles = []
    const trianglesP = []

    // Retorna o valor do perimetro maximo pela array de perimetros
    const getMaxPerimeter = () => {
        return Math.max(...trianglesP)
    }

    // Cria uma array com triangulos validos e uma array com os respectivos perimetros
    const createTriangles = (sSide, index) => {

        let mSide = sticks[index + 1]
        let lSide = sticks[index + 2]
        let p = sSide + mSide + lSide
        let isValidTriangle = lSide < sSide + mSide

        if (isValidTriangle) {
            validTriangles.push([sSide, mSide, lSide])
            trianglesP.push(p)
        }

        // console.log(sSide, mSide, lSide)
        // console.log(validTriangles, trianglesP)
        return lSide
    }

    // Criando os triangulos validos
    sticks = sticks.sort((a, b) => a - b) 
    sticks.every(createTriangles)

    // Filtrando os triangulos que possuem o perimetro maximo encontrado
    let maxPTriangles = validTriangles.filter((triangle, index) => {
        return trianglesP[index] == getMaxPerimeter()
    })

    // Em caso de empate obter o: 1 - de lado maior maximo | 2 - de lado menor maximo
    if (maxPTriangles.length > 1) {
        maxPTriangles = [maxPTriangles.reduce((acc, act) => {
            if (acc[2] < act[2] || acc[0] < act[0]) acc = act
            return acc
        })]
    } 

    // Retornando o triangulo de perimetro maximo ou -1 caso não houver triangulo valido
    return maxPTriangles[0] != undefined ? maxPTriangles[0] : [-1]
}

let test = [1, 1, 1, 3, 3]
console.log(maximumPerimeterTriangle(test))