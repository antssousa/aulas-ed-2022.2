function Queue(maxLength = 10) {
    let item = []

    this.isFull = function () {
        return item.length === maxLength
    }
    // Enfileirar
    this.enqueue = function (element, time) {
        if (!this.isFull()) {
            let node = {
                element: element,
                time: time
            }
            item.push(node)
        } else {
            console.log('Fila cheia')
        }
    }

    // Desenfileirar
    this.dequeue = function () {
        return item.shift()
    }

    // Olhar o primeiro elemento da fila
    this.front = function () {
        return item[0]
    }

    // Olhar o último elemento da fila
    this.back = function () {
        return item[item.length - 1]
    }

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
        let res = ''
        for (let i = 0; i < item.length; i++) {
            if (i < item.length - 1) {
                res += item[i].element + ', '
            } else {
                res += item[i].element
            }
        }
        console.log(`[${res}]`)
    }

    // Limpar a fila
    this.clear = function () {
        item = []
    }
}

const bank = new Queue(100)
const read = require('readline-sync')

let pessoa = 0
let totalTime = 0

for (;;) {
    console.log('1 - Entrada')
    console.log('2 - Saida')
    console.log('3 - Tempo medio')
    console.log('4 - Exibir a fila atual')
    console.log('0 - Sair')
    let op = read.question('> ')
    if (op === '1') {
        pessoa++
        let timeEnter = Date.now()
        bank.enqueue(pessoa, timeEnter)
        console.log(`Pessoa ${pessoa} entrou na fila`)
    } else if (op === '2') {
        let removido = bank.dequeue()
        if (removido) {
            console.log(`A pessoa ${removido.element} foi atendida`)
            let timeExit = Date.now()
            totalTime += timeExit - removido.time
        } else {
            console.log('Nao tem mais pessoas na fila')
        }
    } else if (op === '3') {
        if (pessoa !== 0) {
            let media = totalTime / pessoa
            console.log(`O tempo medio de espera e ${media.toFixed(2)} ms`)
        } else {
            console.log('Ainda nao tem ninguem na fila')
        }
    } else if (op === '4') {
        bank.print()
    } else if (op === '0') {
        console.log('Saindo ...')
        break
    } else {
        console.log('Opcao invalida')
    }
}
