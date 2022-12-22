const link = require('../modulos/LinkedList')

function size(ll) {
    let cont = 0
    let current = ll.getHead()
    while (current) {
        // current != null
        current = current.next
        cont++
    }
    return cont
}

const ll = new link.LinkedList()

let n = Math.floor(Math.random() * 100)
for (let i = 0; i < n; i++) {
    ll.append(Math.floor(Math.random() * 100))
}
ll.print()
console.log(`A lista tem ${size(ll)} elementos`)
