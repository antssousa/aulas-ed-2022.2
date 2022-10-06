const read = require('readline-sync')
let dia = Number(read.question('Digite os dias: '))
let horas = Number(read.question('Digite as horas: '))
let min = Number(read.question('Digite os minutos: '))
let seg = Number(read.question('Digite os segundos: '))

let total = dia * 24 * 60 * 60 + horas * 60 * 60 + min * 60 + seg

// console.log('O total de segundos é: ' + total)
console.log(`O total em segundos é: ${total}`) // Templates Strings
