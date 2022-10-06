const read = require('readline-sync')

let salario = Number(read.question('Digite o salario: '))
let porc = Number(read.question('Digite a porcentagem do aumento: '))

let aumento = salario * (porc / 100)

let novo = salario + aumento

console.log(`O aumento foi de R$ ${aumento.toFixed(2)} e o novo salário ficou de R$ ${novo.toFixed(2)}`)
