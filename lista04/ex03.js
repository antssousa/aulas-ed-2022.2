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

function isSorted(queue) {
    let previous = queue.dequeue()
    let current
    while (!queue.isEmpty()) {
        current = queue.dequeue()
        if (previous > current) {
            return false
        }
        previous = current
    }
    return true
}

const q1 = new Queue()

for (let i = 0; i < 10; i++) {
    q1.enqueue(Math.floor(Math.random() * 100))
}
q1.print()
if (isSorted(q1)) {
    console.log('Fila ordenada')
} else {
    console.log('Fila não ordenada')
}
const q2 = new Queue()

for (let i = 0; i < 10; i++) {
    q2.enqueue(i)
}
q2.print()
if (isSorted(q2)) {
    console.log('Fila ordenada')
} else {
    console.log('Fila não ordenada')
}
