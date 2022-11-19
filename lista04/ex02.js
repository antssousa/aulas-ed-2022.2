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

function Stack() {
    let item = []

    // Empilhar
    this.push = function (element) {
        item.push(element)
    }

    // Desempilhar
    this.pop = function () {
        return item.pop()
    }

    // Olhar o topo da pilha
    this.peek = function () {
        return item[item.length - 1]
    }

    // Verificar se a pilha está vazia
    this.isEmpty = function () {
        return item.length === 0
    }

    // Verificar o tamanho da pilha
    this.size = function () {
        return item.length
    }

    // Exibir a pilha no formato de uma String
    this.toString = function () {
        let str = ''
        for (let i = item.length - 1; i >= 0; i--) {
            str += item[i] + '\n'
        }
        return str
    }

    // Imprimir a pilha
    this.print = function () {
        console.log(this.toString())
    }

    // Limpar a pilha
    this.clear = function () {
        // while(!this.isEmpty()){
        //     this.pop()
        // }
        item = []
    }

    // Gerar uma pilha clone da atual
    this.clone = function () {
        let stack = new Stack()
        for (let i = 0; i < item.length; i++) {
            stack.push(item[i])
        }
        return stack
    }
}

function inverte(queue) {
    const stack = new Stack()
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue())
    }
    while (!stack.isEmpty()) {
        queue.enqueue(stack.pop())
    }
}

const queue = new Queue()

for (let i = 0; i < 10; i++) {
    queue.enqueue(Math.floor(Math.random() * 100))
}
console.log('Fila preenchida')
queue.print()
inverte(queue)
console.log('Fila invertida')
queue.print()
