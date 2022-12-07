function Queue() {
    let item = []

    // Enfileirar
    this.enqueue = function (element) {
        item.push(element)
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

    this.insertAt = function (index, element) {
        if (index >= 0 && index < this.size()) {
            item.splice(index, 0, element)
        } else {
            console.log('Elemento nao poder ser inserido')
        }
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

queue.print()

queue.insertAt(0, 10)
queue.print()
queue.insertAt(6, 100)
queue.print()
