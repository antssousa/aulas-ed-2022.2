const read = require('readline-sync')

let vetNum = []

for (let i = 0; i < 10; i++) {
    let n = Number(read.question(`Digite o ${i + 1}º numero: `))
    vetNum[i] = n * n //Math.pow(n, 2)
}

console.log(vetNum)
console.log('[' + vetNum + ']')
console.log(`[${vetNum}]`)

let i = 0
while (i < vetNum.length) {
    console.log(`vetNum[${i}] = ${vetNum[i]}`)
    i++
}
