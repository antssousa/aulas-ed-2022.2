const read = require('readline-sync')

// let nota = Number(read.question('Digite a nota: '))

// while (nota < 0 || nota > 10) {
//     console.log('Nota inválida')
//     nota = Number(read.question('Digite a nota: '))
// }
// console.log(`A nota ${nota} é válida`)
// let nota
// do {
//     nota = Number(read.question('Digite a nota: '))
//     if (nota < 0 || nota > 10) {
//         console.log('Nota inválida')
//     }
//  } while (nota < 0 || nota > 10)
//  console.log(`A nota ${nota} é válida`)

//Loop infinito
for(;;){
    let nota = Number(read.question('Digite a nota: '))
    if (nota < 0 || nota > 10) {
        console.log('Nota inválida')
    } else {
        console.log(`A nota ${nota} é válida`)
        break
    }
}