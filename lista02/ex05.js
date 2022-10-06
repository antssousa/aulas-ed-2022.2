const read = require('readline-sync')

let alturas = []
let soma = 0

for (let i = 0; i < 8; i++) {
    alturas[i] = Number(read.question(`Digite a altura do atleta ${i + 1}: `))
    soma += alturas[i] //soma = soma + notas[i]
}

let media = soma / alturas.length
console.log(`A media das alturas dos atletas e ${media.toFixed(2)}`)

for (let i = 0; i < alturas.length; i++) {
    if (alturas[i] > media) {
        console.log(`O atleta ${i + 1} tem a altura ${alturas[i]}`)
    }
}
