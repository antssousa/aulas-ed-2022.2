const link = require('../modulos/LinkedList')

function min(ll) {
    let current = ll.getHead()
    // m guarda o menor elemento atual
    let m = current.element
    let index = 0,
        indexMin = 0
    current = current.next
    while (current) {
        index++
        if (current.element < m) {
            indexMin = index
            m = current.element
        }
        current = current.next
    }
    return indexMin
    // return m
}

const ll = new link.LinkedList()
for (let i = 0; i < 10; i++) {
    ll.append(Math.floor(Math.random() * 100))
}

ll.print()

console.log(`O menor elemento da lista é ${min(ll)}`)
