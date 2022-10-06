// function isPositive(n) {
//     if (n > 0) {
//         return true
//     } else {
//         return false
//     }
// }

// function isPositive(n) {
//     if (n > 0) {
//         return true
//     }
//     return false
// }

function isPositive(n) {
    return n > 0
}

const read = require('readline-sync')
let n = Number(read.question('Digite um numero: '))

if (isPositive(n) == true) {
    console.log(`${n} é positivo`)
} else {
    console.log(`${n} nao é positivo`)
}

if (isPositive(n)) {
    console.log(`${n} é positivo`)
} else {
    console.log(`${n} nao é positivo`)
}
