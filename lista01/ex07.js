const read = require('readline-sync')

let n = Number(read.question('Digite um numero: '))

if (n > 0){
    console.log(`${n} é positivo`)
} else if (n < 0) {
    console.log(`${n} é negativo`)
} else {
    console.log(`${n} é o zero`)
}