const read = require('readline-sync')

let notas = []
let soma = 0

for (let i = 0; i < 8; i++) {
    notas[i] = Number(read.question(`Digite a nota ${i + 1}: `))
    soma += notas[i] //soma = soma + notas[i]
}

let media = soma / notas.length
console.log(`A media do aluno e ${media.toFixed(2)}`)
