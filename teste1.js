const fs = require('fs')
csv      = fs.readFileSync("arquivo.csv")

var array = csv.toString().split('\r\n')

var result = []

for(e of array) {
    result.push(e.split(';'))
}

result = JSON.stringify(result)

console.log(result)