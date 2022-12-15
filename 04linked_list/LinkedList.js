function LinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null

    // Adicionar um elemento no final da linked list
    this.append = function (element) {
        let node = new Node(element)
        if (this.isEmpty()) {
            head = node
            length++
        } else {
            let current = head
            // current.next !== null
            while (current.next) {
                current = current.next
            }
            current.next = node
            length++
        }
    }

    // Inserir um elemento em uma posição da linked list
    this.insert = function (index, element) {
        if (index >= 0 && index <= length) {
            let node = new Node(element)
            if (index == 0) {
                node.next = head
                head = node
                length++
            } else {
                let i = 0
                let current = head
                while (i < index - 1) {
                    current = current.next
                    i++
                }
                node.next = current.next
                current.next = node
                length++
            }
        } else {
            console.log('Indice incorreto')
        }
    }

    // Remover um elemento da posição passada
    this.removeAt = function (index) {
        if (index >= 0 && index < length) {
            if (index === 0) {
                let remove = head
                head = head.next
                length--
                return remove.element
            } else if (index === length - 1) {
                let current = head
                let previous = null
                while (current.next) {
                    previous = current
                    current = current.next
                }
                let remove = current
                previous.next = null
                length--
                return remove.element
            } else {
                let i = 0
                let previous = null
                let current = head
                while (i < index) {
                    previous = current
                    current = current.next
                    i++
                }

                let remove = current
                previous.next = current.next
                length--
                return remove.element
            }
        } else {
            console.log('Indice incorreto')
        }
    }

    // Remove o elemento passado como parâmetro
    this.remove = function (element) {
        let index = this.indexOf(element)
        if (index !== -1) {
            return this.removeAt(index)
        } else {
            console.log('Elemento nao existe na lista')
        }
    }

    // Retorna o índice do primeiro elemento recebido como parâmetro
    this.indexOf = function (element) {
        if (this.isEmpty()) {
            return -1
        } else {
            let current = head
            let index = 0
            while (current) {
                if (current.element === element) {
                    return index
                }
                index++
                current = current.next
            }
            return -1
        }
    }

    // Retorna o índice do último elemento recebido como parâmetro
    this.lastIndexOf = function (element) {
        if (this.isEmpty()) {
            return -1
        } else {
            let index = -1
            let current = head
            let i = 0
            while (current) {
                if (current.element === element) {
                    index = i
                }
                i++
                current = current.next
            }
            return index
        }
    }

    // Retorna verdadeiro se o elemento está na linked list
    this.contains = function (element) {
        return this.indexOf(element) !== -1
    }

    // Retorna verdadeiro se a linked list estiver vazia
    this.isEmpty = function () {
        return head === null
    }

    // Retorna o tamanho da linked list
    this.size = function () {
        return length
    }

    // Retorna o elemento do índice passado como parâmetro
    this.get = function (index) {
        if (index >= 0 && index < length) {
            let current = head
            let i = 0
            while (i < index) {
                current = current.next
                i++
            }
            return current.element
        } else {
            console.log('Indice invalido')
        }
    }

    // Imprime a linked list
    this.print = function () {
        let ll = ''
        if (!this.isEmpty()) {
            let current = head
            // current !== null
            while (current) {
                ll += current.element + ', '
                current = current.next
            }
        }

        ll = ll.slice(0, ll.length - 2)
        console.log(`[${ll}]`)
    }

    // Apaga a linked list
    this.clear = function () {
        head = null
        length = 0
    }

    // Converte a linked list num array
    this.toArray = function () {
        let array = []
        let current = head
        while (current) {
            array.push(current.element)
            current = current.next
        }
        return array
    }
}

const ll = new LinkedList()
ll.append(1)
ll.print()
ll.append(2)
ll.print()
ll.append(3)
ll.print()
ll.append(4)
ll.print()
ll.insert(1, 100)
ll.print()
ll.insert(2, 200)
ll.print()
ll.insert(3, 400)
ll.print()
ll.print()
ll.insert(ll.size(), 500)
ll.print()
ll.insert(0, 500)
ll.print()
console.log(ll.removeAt(0))
ll.print()
console.log('>' + ll.removeAt(3))
ll.print()
console.log('>' + ll.removeAt(2))
ll.print()
console.log('>' + ll.removeAt(1))
ll.print()
console.log('>' + ll.removeAt(ll.size() - 1))
ll.print()
ll.append(5)
ll.append(6)
ll.append(7)
ll.append(8)
ll.print()
console.log(ll.indexOf(1))
console.log(ll.indexOf(5))
console.log(ll.indexOf(8))
console.log(ll.remove(1))
console.log(ll.remove(5))
console.log(ll.remove(8))
console.log(ll.remove(9))
ll.print()
ll.append(4)
ll.print()
console.log(ll.indexOf(4))
console.log(ll.lastIndexOf(4))
console.log(ll.contains(7))
console.log(ll.get(2))
ll.print()
let array = ll.toArray()
console.log(array)
