function ePrimo1(n) {
    let contDiv = 0

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            contDiv++
        }
    }

    if (contDiv == 2) {
        return true
    } else {
        return false
    }
}

function ePrimo(n) {
    if (!Number.isInteger(n) || n < 2) {
        return false
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

const read = require('readline-sync')

let n = Number(read.question('Digite um número: '))

if (ePrimo(n)) {
    console.log(`${n} é primo`)
} else {
    console.log(`${n} não é primo`)
}

for (let i = 1; i < 10000; i++) {
    if (ePrimo(i)) {
        console.log(`${i} é primo`)
    }
}
