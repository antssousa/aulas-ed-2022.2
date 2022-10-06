const read = require('readline-sync')

let horas = Number(read.question('Quantas horas voce trabalhou? '))

let valor = Number(read.question('Quanto voce recebe por hora? '))

let salario = horas * valor

console.log(`O salário e R$ ${salario}`)