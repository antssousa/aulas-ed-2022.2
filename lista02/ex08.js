let vetor = []

for (let i = 0; i < 100; i++) {
    vetor[i] = Math.floor(Math.random() * 100)
}

let contPar = 0,
    contImpar = 0

// for(let i = 0; i < vetor.length; i++)
let i = 0
while (i < vetor.length) {
    if (vetor[i] % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }
    i++
}

console.log(
    `O vetor tem ${contPar} numeros pares e ${contImpar} numeros impares`
)
