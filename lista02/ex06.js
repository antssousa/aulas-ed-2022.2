let v = []
for (let i = 0; i < 10; i++) {
    v[i] = Math.floor(Math.random() * 100)
}

console.log(`v = [${v}]`)

for (let i = 0; i < v.length; i++) {
    console.log(`Elemento da posicao ${i} e ${v[i]}`)
}
