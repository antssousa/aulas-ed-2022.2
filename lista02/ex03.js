const read = require('readline-sync')

let v = []

let n = Number(read.question('Digite quantos elementos o vetor tera: '))

for (let i = 0; i < n; i++) {
    v[i] = Number(read.question(`v[${i}] = `))
}

console.log(`[${v}]`)
