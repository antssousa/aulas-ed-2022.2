function List(length = 10) {
    let item = []
    item[length - 1] = undefined
    let next = 0

    // Inserir sempre no final
    this.insert = function (element) {
        if (!this.isFull()) {
            item[next] = element
            next++
        } else {
            console.log('Lista cheia')
        }
    }

    this.isFull = function () {
        return next === length
    }
    // Passar um elemento para ser inserido numa posição específica
    this.insertAt = function (element, index) {
        if (index >= 0 && index < next) {
            item[index] = element
        } else if (index == next && !this.isFull()) {
            this.insert(element)
        } else {
            console.log('Erro! Nao e possivel inserir o elemento')
        }
    }

    // Exibir a lista no formato de uma String
    this.toString = function () {
        let array = '['
        for (let i = 0; i < next; i++) {
            // if (i < next - 1) {
            array += item[i] + ','
            // } else {
            // array += item[i]
            // }
        }
        array = array.slice(0, array.length - 1) + ']'
        // array += ']'
        return array
    }

    this.print = function () {
        console.log(this.toString())
    }

    this.indexOf = function (element) {
        for (let i = 0; i < next; i++) {
            if (element == item[i]) {
                return i
            }
        }
        return -1
    }

    this.lastIndexOf = function (element) {
        // for (let i = next - 1; i >= 0; i--) {
        //     if (element == item[i]) {
        //         return i
        //     }
        // }
        // return -1
        let last = -1
        for (let i = 0; i < next; i++) {
            if (element == item[i]) {
                last = i
            }
        }
        return last
    }

    this.isEmpty = function () {
        return next == 0
    }

    this.size = function () {
        return next
    }

    this.clear = function () {
        next = 0
    }

    this.contains = function (element) {
        // for (let i = 0; i < next; i++) {
        //     if (element == item[i]) {
        //         return true
        //     }
        // }
        // return false
        return this.indexOf(element) >= 0
    }

    this.removeAt = function (index) {
        if (index >= 0 && index < next) {
            for (let i = index; i < next - 1; i++) {
                item[i] = item[i + 1]
            }
            next--
        } else {
            console.log('Erro! Nao foi possivel remover o elemento')
        }
    }

    this.remove = function (element) {
        this.removeAt(this.indexOf(element))
    }
}

const lista1 = new List()
lista1.print()
console.log(lista1.isEmpty())
lista1.insert(8)
console.log(lista1.isEmpty())
lista1.insert(9)
lista1.insert(10)
lista1.insert(11)
lista1.print()
lista1.insertAt(12, 2)
lista1.print()
lista1.insertAt(15, 20)
lista1.print()
lista1.insertAt(15, 4)
lista1.print()
lista1.insert(9)
lista1.print()
console.log(lista1.indexOf(15))
console.log(lista1.indexOf(9))
console.log(lista1.lastIndexOf(9))
console.log(lista1.indexOf(100))
lista1.remove(11)
lista1.remove(110)
lista1.print()
lista1.clear()
