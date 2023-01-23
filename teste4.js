var arr = []

for(var i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 1000000))
}

var result = arr.filter((e) => e % 2 != 0)

console.log(result)