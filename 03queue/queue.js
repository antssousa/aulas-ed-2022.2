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

const queue = new Queue()
console.log(queue.back())
console.log(queue.isEmpty())
queue.enqueue(1)
console.log(queue.isEmpty())
queue.print()
queue.enqueue(2)
queue.print()
queue.enqueue(3)
queue.print()
queue.enqueue(4)
queue.print()
queue.enqueue(5)
queue.print()
console.log('Front: ' + queue.front())
console.log('Back: ' + queue.back())
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
// Preencher uma fila com valores aleatórios
for (let i = 0; i < 10; i++) {
    queue.enqueue(Math.floor(Math.random() * 100))
}
queue.print()

// Esvaziar uma fila
while (!queue.isEmpty()) {
    console.log(`elemento removido ${queue.dequeue()}`)
}
