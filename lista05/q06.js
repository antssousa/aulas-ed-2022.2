const link = require('../modulos/LinkedList')

function isSorted(ll) {
    // Primeiro
    let current = ll.getHead()
    // Segundo
    let next = current.next
    while (next) {
        if (current.element > next.element) {
            return false
        }
        current = next
        next = current.next
    }
    return true
    // for (let i = 0; i < ll.size() - 1; i++) {
    //     if (ll.get(i) > ll.get(i + 1)) {
    //         return false
    //     }
    // }
    // return true
}

const lla = new link.LinkedList()
for (let i = 1; i <= 10; i++) {
    lla.append(i)
}

if (isSorted(lla)) {
    console.log('Lista ordenada')
} else {
    console.log('Lista não ordenada')
}
const llb = new link.LinkedList()
for (let i = 1; i <= 9; i++) {
    llb.append(i)
}
llb.append(0)

if (isSorted(llb)) {
    console.log('Lista ordenada')
} else {
    console.log('Lista não ordenada')
}
