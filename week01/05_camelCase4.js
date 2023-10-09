function processData(input) {

    input = input.split('\n')

    input.forEach(entry => {
        let newString = ''
        let operation = entry[0]
        let inputType = entry[2]

        if (operation == 'S') {

            entry = entry.slice(4)
            let getCapital = entry.match(/[A-Z]/)

            if (inputType == 'M') entry = entry.slice(0, entry.length - 2)

            while (getCapital) {
                let ind = getCapital.index
                if (ind == 0) newString += getCapital[0].toLowerCase()
                else newString += entry.slice(0, ind) + ' ' + getCapital[0].toLowerCase()
                entry = entry.split('')
                entry = entry.splice(ind + 1, entry.length - 1)
                entry = entry.join('')
                getCapital = entry.match(/[A-Z]/)
            }

            console.log((newString + entry).trim())

        }
        else if (operation == 'C') {

            entry = entry.slice(4)
            let stringArray = entry.split(' ')

            for (let i = 0; i < stringArray.length; i++) {

                stringArray[i] = stringArray[i][0].toUpperCase()
                    + stringArray[i].slice(1)

            }

            newString = stringArray.join('')
            if (inputType == 'M') newString = (newString[0].toLowerCase() + newString.slice(1)).concat('()')
            if (inputType == 'V') newString = newString[0].toLowerCase() + newString.slice(1)

            console.log((newString).trim())

        }
    })
}

processData('S;V;iPad\nC;M;mouse pad\nC;C;code swarm\nS;C;OrangeHighlighter')
// processData('C;V;can of coke\nS;M;sweatTea()\nS;V;epsonPrinter\nC;M;santa claus\nC;C;mirror')