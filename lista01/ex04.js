const read = require('readline-sync')

let fah = Number(read.question('Digite uma temperatura em Fahrenheit: '))

let cels = 5 * (fah - 32) / 9

console.log(`A temperatura em Celsius é: ${cels}`)