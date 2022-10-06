const read = require('readline-sync')

let inicio = Number(read.question('Digite o inicio: '))
let fim = Number(read.question('Digite o fim: '))

// if (inicio > fim){
//     let aux = inicio
//     inicio = fim
//     fim = aux
// }

// for (let i = inicio; i <= fim; i++) {
//     console.log(i)
// }

if (inicio < fim) {
    for (let i = inicio; i <= fim; i++) {
        console.log(i)
    }
} else {
    for (let i = inicio; i >= fim; i--) {
        console.log(i)
    }
}
