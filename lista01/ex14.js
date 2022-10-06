function ePerfeito(n) {
    let soma = 0
    for (let i = 1; i <= n / 2; i++) {
        // soma = n % i == 0 ? soma + i : 0;
        if (n % i == 0) {
            soma = soma + i
        }
    }

    return soma == n
    // if (soma == n){
    //     return true
    // } else {
    //     return false
    // }
}

for (let i = 1; i <= 1000000; i++) {
    if (ePerfeito(i)) {
        console.log(`${i} é perfeito`)
    }
}
