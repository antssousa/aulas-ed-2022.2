const link = require('../modulos/LinkedList')

// 0 1 2 3 4 5 6 7 8 9

function depth(ll, element) {
    // return ll.indexOf(element)
    let current = ll.getHead()
    let index = 0
    while (current) {
        if (element == current.element) {
            return index
        }
        index++
        current = current.next
    }
    return -1
}

const ll = new link.LinkedList()

for (let i = 0; i < 10; i++) {
    ll.append(i)
}
ll.print()
console.log(`A profundidade do nó 0 é ${depth(ll, 0)}`)
console.log(`A profundidade do nó 4 é ${depth(ll, 4)}`)
console.log(`A profundidade do nó 9 é ${depth(ll, 9)}`)
