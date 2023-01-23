const fs = require('fs')
csv      = fs.readFileSync("arquivo.csv")

var array = csv.toString().split('\r\n')

var result = []

for(e of array) {
    result.push(e.split(';'))
}

result = JSON.stringify(result)

const ordenar = (coluna, sentido, result) => {
    result = JSON.parse(result)

    var idx_coluna = result[0].indexOf(coluna)

    if(idx_coluna == -1) {
        return 'Essa coluna nao existe'
    }

    var header = result.shift()

    if(idx_coluna == 1) {
        result.sort((a, b) => {
            a = parseInt(a[1])
            b = parseInt(b[1])
            return a-b
        })
    } else {
        result.sort((a, b) => {
            a = a[idx_coluna]
            b = b[idx_coluna]
            
            if(a > b) {
                return 1;
            } else if(a < b) {
                return -1;
            }

            return 0;
        })
    }

    if(sentido == 'DESC') {
        result.reverse()
    }

    result.unshift(header)

    return result;
}

console.log(ordenar('idade', 'DESC', result))