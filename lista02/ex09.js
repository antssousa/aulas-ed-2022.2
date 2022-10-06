let n = []

for (let i = 0; i < 10; i++) {
    n[i] = Math.floor(Math.random() * 100)
}

let menor = 0

for (let i = 1; i < n.length; i++) {
    if (n[i] < n[menor]) {
        menor = i
    }
}

console.log(`n = [${n}]`)

console.log(`O menor elemento e ${n[menor]} e se encontra na posicao ${menor}`)
