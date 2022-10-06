let numeros = []
let pares = []
let impares = []

for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 100)
}

let par = 0,
    impar = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        // pares.push(numeros[i])
        pares[par] = numeros[i]
        par++
    } else {
        // impares.push(numeros[i])
        impares[impar] = numeros[i]
        impar++
    }
}

console.log(`numeros = [${numeros}]`)
console.log(`pares = [${pares}]`)
console.log(`impares = [${impares}]`)
