const link = require('../modulos/LinkedList')

function height(ll, element) {
    let index = ll.indexOf(element)
    if (index != -1) {
        return ll.size() - 1 - index
    }
    return -1

    // let current = ll.getHead()
    // // current != null
    // while (current) {
    //     if (element == current.element) {
    //         let h = -1
    //         while (current) {
    //             current = current.next
    //             h++
    //         }
    //         return h
    //     }
    //     current = current.next
    // }
    // return -1
}

const ll = new link.LinkedList()

for (let i = 0; i < 10; i++) {
    ll.append(i)
}
ll.print()
console.log(`A altura do nó 0 é ${height(ll, 0)}`)
console.log(`A altura do nó 4 é ${height(ll, 4)}`)
console.log(`A altura do nó 9 é ${height(ll, 9)}`)
