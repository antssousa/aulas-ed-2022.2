function Queue(length = 10) {
    let item = []
    item[length - 1] = undefined
    let last = 0

    // Enfileirar
    this.enqueue = function (element) {
        if (!this.isFull()) {
            item[last] = element
            last++
        } else {
            console.log('Fila cheia')
        }
    }

    // Desenfileirar
    this.dequeue = function () {
        if (!this.isEmpty()) {
            let first = item[0]
            for (let i = 0; i < last - 1; i++) {
                item[i] = item[i + 1]
            }
            last--
            return first
        } else {
            console.log('Fila vazia')
        }
    }

    // Olhar o primeiro elemento da fila
    // Olhar o último elemento da fila

    // Verificar se a fila está vazia
    this.isEmpty = function () {
        return last === 0
    }

    this.isFull = function () {
        return last === length
    }

    // Verificar o tamanho da fila
    this.size = function () {
        return last
    }

    // Imprimir a fila
    this.print = function () {
        let res = '['
        for (let i = 0; i < last; i++) {
            if (i < last - 1) {
                res += item[i] + ', '
            } else {
                res += item[i]
            }
        }
        res += ']'
        console.log(res)
    }

    // Limpar a fila
    this.clear = function () {
        last = 0
    }

    this.front = function () {
        if (!this.isEmpty()) {
            return item[0]
        } else {
            return null
        }
    }

    this.back = function () {
        if (!this.isEmpty()) {
            return item[last - 1]
        } else {
            return null
        }
    }
}

const queue = new Queue(4)
queue.enqueue(1)
queue.print()
queue.enqueue(2)
queue.print()
queue.enqueue(3)
queue.print()
queue.enqueue(4)
queue.print()
queue.enqueue(5)
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
