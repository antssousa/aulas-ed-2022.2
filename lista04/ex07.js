function Queue() {
    let item = []

    // Enfileirar
    this.enqueue = function (element) {
        item.push(element)
        // item[item.length] = element
    }

    // Desenfileirar
    this.dequeue = function () {
        return item.shift()
    }

    this.front = function () {
        return item[0]
    }

    this.back = function () {
        return item[item.length - 1]
    }

    // Olhar o primeiro elemento da fila
    // Olhar o último elemento da fila

    // Verificar se a fila está vazia
    this.isEmpty = function () {
        return item.length === 0
    }

    // Verificar o tamanho da fila
    this.size = function () {
        return item.length
    }

    // Imprimir a fila
    this.print = function () {
        // // for (let i = 0; i < item.length; i++) {
        // //     if (i < item.length - 1) {
        // //         res += item[i] + ', '
        // //     } else {
        // //         res += item[i]
        // //     }
        // // }
        // // res += ']'
        // if (this.isEmpty()) {
        //     console.log('[]')
        // } else {
        //     let res = '['

        //     for (let i = 0; i < item.length; i++) {
        //         res += item[i] + ', '
        //     }
        //     // res = res.slice(0, -2) + ']'
        //     res = res.slice(0, res.length - 2) + ']'
        //     console.log(res)
        // }
        // console.log(item)
        console.log(`[${item}]`)
    }

    // Limpar a fila
    this.clear = function () {
        item = []
    }

    // Gerar uma fila clone da atual
    this.clone = function () {
        const queue = new Queue()
        for (let i = 0; i < item.length; i++) {
            queue.enqueue(item[i])
        }
        return queue
    }
}

const read = require('readline-sync')

const filas = []

for (let i = 0; i < 7; i++) {
    filas[i] = new Queue()
}

let dia = 0
for (;;) {
    console.log('0 - sair')
    if (dia > 6) {
        dia = 0
    } else {
        dia++
    }

    let op = read.questionInt(
        'Digite o dia da semana que deseja alugar o filme: '
    )
    if (op == 0) {
        break
    } else if (op >= 1 && op <= 7) {
        let nome = read.question('Diga seu nome: ')
        filas[op - 1].enqueue(nome)
    } else {
        console.log('Dia da semana invalida')
    }
    while (!filas[dia].isEmpty()) {
        console.log(
            `${filas[dia].dequeue()} vai alugar o filme? 0 - nao, 1 - sim`
        )
        let opcao = read.questionInt('> ')
        if (opcao === 1) {
            break
        }
    }
}
