function Queue() {
    let item = []

    this.enqueue = function (element, priority) {
        let node = {
            element: element,
            priority: priority
        }
        item.push(node)
    }

    this.dequeue = function () {
        return item.shift()
    }

    this.isEmpty = function () {
        return item.length === 0
    }

    this.size = function () {
        return item.length
    }

    this.print = function () {
        res = ''
        for (let i = 0; i < item.length; i++) {
            if (i < item.length - 1) {
                res +=
                    '(' + item[i].element + ', ' + item[i].priority + ')' + ','
            } else {
                res += '(' + item[i].element + ', ' + item[i].priority + ')'
            }
        }
        console.log(`[${res}]`)
    }
}

const fe = new Queue()
const f0 = new Queue()
const f1 = new Queue()
const f2 = new Queue()

function printQueue() {
    while (fe.size() < 50) {
        let element = Math.floor(Math.random() * 1000)
        let luck = Math.floor(Math.random() * 100)
        let priority

        if (luck < 33) {
            priority = 0
        } else if (luck < 66) {
            priority = 1
        } else {
            priority = 2
        }
        fe.enqueue(element, priority)
    }
    console.log('Fila de entrada')
    fe.print()
    let hasSpace = true
    while (!fe.isEmpty() && hasSpace) {
        let node = fe.dequeue()
        if (node.priority === 0 && f0.size() < 15) {
            f0.enqueue(node.element, node.priority)
        } else if (node.priority === 1 && f1.size() < 15) {
            f1.enqueue(node.element, node.priority)
        } else if (f2.size() < 15) {
            f2.enqueue(node.element, node.priority)
        }
        hasSpace = f0.size() < 15 || f1.size() < 15 || f2.size() < 15
    }

    console.log('-----------------------')
    console.log('Fila de prioridade maxima')
    f0.print()
    console.log('-----------------------')
    console.log('Fila de prioridade media')
    f1.print()
    console.log('-----------------------')
    console.log('Fila de prioridade minima')
    f2.print()
    console.log('-----------------------')
    console.log('Fila de entrada')
    fe.print()
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
}
// setInterval(printQueue, 5000)
const read = require('readline-sync')
let before = Date.now()
let current
let deltaTime = 5000
for (;;) {
    current = Date.now()
    deltaTime -= current - before
    console.log(`Tempo decorrido ${deltaTime}`)
    if (deltaTime <= 0) {
        printQueue()
        deltaTime = 5000
        read.question('Aperte qualquer tecla e enter para continuar')
    }
    before = current
}
