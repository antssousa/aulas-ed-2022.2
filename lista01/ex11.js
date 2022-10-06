function volume(raio) {
    return (4 / 3) * Math.PI * Math.pow(raio, 3)
    // let v = 4/3 * Math.PI * Math.pow(raio, 3)
    // let v = 4/3 * 3.14 * raio * raio * raio
    // return v
}

const read = require('readline-sync')

let r = Number(read.question('Digite o raio da esfera: '))

let v = volume(r)
console.log(`O volume da esfera de raio ${r} e ${v.toFixed(2)}`)

console.log(`O volume da esfera ${volume(11)}`)

let res = volume(Number(read.question('Digite um raio: ')))
console.log(`O volume da esfera ${res}`)
