function List() {
    let item = []

    // Inserir sempre no final
    this.insert = function (element) {
        item[item.length] = element
    }

    // Passar um elemento para ser inserido numa posição específica
    this.insertAt = function (element, index) {
        if (index >= 0 && index <= item.length) {
            item[index] = element
        } else {
            console.log('Erro: indice invalido!')
        }
    }

    // Exibir a lista no formato de uma String
    this.toString = function () {
        return `[${item}]`
    }

    this.print = function () {
        console.log(this.toString())
    }

    this.indexOf = function (element) {
        for (let i = 0; i < item.length; i++) {
            if (element == item[i]) {
                return i
            }
        }
        return -1
    }

    this.lastIndexOf = function (element) {
        // for (let i = item.length - 1; i >= 0; i--) {
        //     if (element == item[i]) {
        //         return i
        //     }
        // }
        // return -1
        let last = -1
        for (let i = 0; i < item.length; i++) {
            if (element == item[i]) {
                last = i
            }
        }
        return last
    }

    this.isEmpty = function () {
        return item.length == 0
    }

    this.clear = function () {
        item = []
    }

    this.contains = function (element) {
        // for (let i = 0; i < item.length; i++) {
        //     if (element == item[i]) {
        //         return true
        //     }
        // }
        // return false
        return this.indexOf(element) >= 0
    }
}

const lista1 = new List()
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
lista1.insert(9)
lista1.print()
lista1.print()
console.log(lista1.indexOf(15))
console.log(lista1.indexOf(9))
console.log(lista1.lastIndexOf(9))
console.log(lista1.indexOf(100))
lista1.clear()
