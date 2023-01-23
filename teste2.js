const fs = require('fs')
csv      = fs.readFileSync("arquivo.csv")

var array = csv.toString().split('\r\n')

var result = []

for(e of array) {
    result.push(e.split(';'))
}

// AQUI JÁ TEMOS O CVS COMO JSON
result = JSON.stringify(result)

const buscar_cidade = (s, arquivo) => {
    var obj = JSON.parse(arquivo)

    for(var i = 1; i < obj.length; i++) {
        if(obj[i].includes(s)) {
            return `A cidade ${obj[i][2]} foi encontrada`
        }
    }

    return 'A cidade não foi encontrada'
}

console.log(buscar_cidade('fortaleza', result))