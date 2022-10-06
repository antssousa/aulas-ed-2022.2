const read = require('readline-sync')

let dias = Number(read.question('Digite a quantidade de dias: '))
let km = Number(read.question('Digite a quantidade de km rodados: '))

let aluguel = dias * 60 + km * 0.15

console.log(`O valor a ser pago é R$ ${aluguel.toFixed(2)}`)