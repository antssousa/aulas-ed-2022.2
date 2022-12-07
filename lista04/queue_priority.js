function QueuePriority() {
    let item = []

    this.enqueue = function (element, priority = false) {
        let node = {
            elem: element,
            prio: priority
        }
        if (priority) {
            let index = 0
            for (let i = 0; i < item.length; i++) {
                if (!item[i].prio) {
                    index = i
                    break
                }
            }
            item.splice(index, 0, node)
        } else {
            item.push(node)
        }
    }

    this.dequeue = function () {
        return item.shift().elem
    }

    this.print = function () {
        res = ''
        for (let i = 0; i < item.length; i++) {
            if (i < item.length - 1) {
                res += item[i].elem + ', '
            } else {
                res += item[i].elem
            }
        }
        console.log(`[${res}]`)
    }
}

const qp = new QueuePriority()
qp.enqueue(1)
qp.enqueue(2)
qp.enqueue(3)
qp.enqueue(4)
qp.print()
qp.enqueue(10, true)
qp.print()
qp.enqueue(100)
qp.print()
qp.enqueue(1000, true)
qp.print()
console.log(`Elemento removido ${qp.dequeue()}`)
qp.print()
console.log(`Elemento removido ${qp.dequeue()}`)
qp.print()
console.log(`Elemento removido ${qp.dequeue()}`)
qp.print()
