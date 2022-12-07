function Deque() {
    let item = []

    // Insere no fim
    this.insertBack = function (element) {
        item.push(element)
    }

    // Insere no começo
    this.insertFront = function (element) {
        item.splice(0, 0, element)
    }

    // Remove do começo
    this.removeFront = function () {
        return item.shift()
    }

    // Remove do fim
    this.removeBack = function () {
        return item.pop()
    }

    // Imprimir
    this.print = function () {
        console.log(`[${item}]`)
    }

    this.toString = function () {
        return `[${item}]`
    }
}

const deque = new Deque()
deque.insertBack(1)
deque.print()
deque.insertFront(2)
deque.print()
deque.insertBack(3)
deque.print()
deque.insertFront(4)
deque.print()
console.log(`Elemento removido ${deque.removeBack()}`)
console.log(`Elemento removido ${deque.removeFront()}`)
deque.print()

function Stack() {
    const deque = new Deque()

    this.push = function (element) {
        deque.insertBack(element)
    }
    this.pop = function () {
        return deque.removeBack()
    }
    this.print = function () {
        console.log(deque.toString())
    }
}

const stack = new Stack()
stack.push(1)
stack.print()
stack.push(2)
stack.print()
stack.push(3)
stack.print()
stack.push(4)
stack.print()
stack.push(5)
stack.print()
console.log(`Elemento removido ${stack.pop()}`)
stack.print()
console.log(`Elemento removido ${stack.pop()}`)
stack.print()

function Queue() {
    const deque = new Deque()

    this.enqueue = function (element) {
        deque.insertBack(element)
    }

    this.dequeue = function () {
        return deque.removeFront()
    }

    this.print = function () {
        console.log(deque.toString())
    }
}

const queue = new Queue()
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

console.log(`Elemento removido ${queue.dequeue()}`)
queue.print()
console.log(`Elemento removido ${queue.dequeue()}`)
queue.print()
