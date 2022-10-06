const read = require('readline-sync')

let n1 = Number(read.question('Digite um número: '))
let n2 = Number(read.question('Digite outro número: '))

if (n1 > n2) {
    console.log(`O primeiro número "${n1}" é o maior`)
} else if (n2 > n1) {
    console.log(`O segundo número "${n2}" é o maior`)
} else {
    console.log('Os dois números são iguais')
}