const link = require('../modulos/LinkedList')

function swapRef(ll, index1, index2) {
    if (
        !(
            index1 >= 0 &&
            index1 < ll.size() &&
            index2 >= 0 &&
            index2 < ll.size()
        )
    ) {
        return false
    }

    if (index1 > index2) {
        let s = index1
        index1 = index2
        index2 = s
    }

    let previous1 = null
    let current = ll.getHead()
    let index = 0
    while (index < index1) {
        previous1 = current
        current = current.next
        index++
    }
    let node1 = current

    let previous2 = null
    while (index < index2) {
        previous2 = current
        current = current.next
        index++
    }

    let node2 = current
    let head = ll.getHead()

    if (index1 == 0) {
        // Cabeça
        if (index1 == index2 - 1) {
            node1.next = node2.next
            node2.next = node1
            ll.setHead(node2)
        } else {
            let next = node2.next
            node2.next = node1.next
            node1.next = next
            previous2.next = node1
            ll.setHead(node2)
        }
    } else {
        if (index1 == index2 - 1) {
            // Nós adjacentes
            node1.next = node2.next
            node2.next = node1
            previous1.next = node2
        } else {
            previous1.next = node2
            let next = node2.next
            node2.next = node1.next
            previous2.next = node1
            node1.next = next
        }
    }

    return true
}

function swap(ll, index1, index2) {
    if (
        !(
            index1 >= 0 &&
            index1 < ll.size() &&
            index2 >= 0 &&
            index2 < ll.size()
        )
    ) {
        return false
    }

    if (index1 > index2) {
        let s = index1
        index1 = index2
        index2 = s
    }
    let current = ll.getHead()
    let index = 0
    while (index < index1) {
        current = current.next
        index++
    }
    let node1 = current

    while (index < index2) {
        current = current.next
        index++
    }
    let node2 = current

    let el = node1.element
    node1.element = node2.element
    node2.element = el
    return true
}

const l1 = new link.LinkedList()
for (let i = 0; i < 10; i++) {
    l1.append(i)
    // l1.append(Math.floor(Math.random() * 100))
}

l1.print()
console.log(swapRef(l1, 0, 1))
l1.print()
console.log(swapRef(l1, 4, 5))
l1.print()
console.log(swapRef(l1, 0, 9))
l1.print()
console.log(swapRef(l1, 9, 0))
l1.print()
