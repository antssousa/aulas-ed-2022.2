const link = require('../modulos/LinkedList')

function equals(l1, l2) {
    if (l1.size() != l2.size()) {
        return false
    }
    let current1 = l1.getHead()
    let current2 = l2.getHead()
    while (current1) {
        if (current1.element != current2.element) {
            return false
        }
        current1 = current1.next
        current2 = current2.next
    }
    return true
}
const l1 = new link.LinkedList()
const l2 = new link.LinkedList()
for (let i = 0; i < 10; i++) {
    l1.append(i)
    l2.append(i)
    // l1.append(Math.floor(Math.random() * 100))
    // l2.append(Math.floor(Math.random() * 100))
}
l1.print()
l2.print()
if (equals(l1, l2)) {
    console.log('As duas listas são iguais')
} else {
    console.log('As duas listas são diferentes')
}
