function DoublyLinkedList() {
    // Nó da lista (Armazena o elemento e aponta para o próximo elemento)
    let Node = function (element) {
        this.element = element
        this.next = null // Próximo elemento
        this.prev = null // Elemento anterior
    }

    // Aponta para o primeiro nó da lista
    let head = null
    // Aponta para o último nó da lista
    let tail = null
    // Quantidade de nós na lista
    let length = 0

    this.getHead = function () {
        return head
    }

    this.setHead = function (node) {
        head = node
    }

    this.getTail = function () {
        return tail
    }

    this.setTail = function (node) {
        tail = node
    }

    // Inserir um nó no final da lista
    this.append = function (element) {
        let node = new Node(element)
        if (this.isEmpty()) {
            head = node
            tail = node
        } else {
            node.prev = tail
            tail.next = node
            tail = node
        }
        length++
    }

    // Inserir um nó numa posição específica
    this.insert = function (element, position) {
        if (position >= 0 && position <= length) {
            let node = new Node(element)
            if (position == 0) {
                node.next = head
                head.prev = node
                head = node
            } else if (position == length) {
                this.append(element)
            } else {
                let current = head
                let previous = null
                let i = 0
                while (i < position) {
                    previous = current
                    current = current.next
                    i++
                }
                node.next = current
                node.prev = previous
                previous.next = node
                current.prev = node
            }
            length++
            return true
        }
        return false
    }

    // Remover um nó pela posição
    this.removeAt = function (position) {
        if (position >= 0 && position < length) {
            let current = head
            if (position == 0) {
                current.next.prev = null
                head = current.next
            } else if (position == length - 1) {
                current = tail
                tail = tail.prev
                tail.next = null
            } else {
                let previous = null
                let index = 0
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                // previous.next --> current
                // current.prev --> previous
                previous.next = current.next
                current.next.prev = previous
            }
            return current.element
        }
        return undefined
    }

    // Remover um nó pelo elemento
    this.remove = function (element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    // Retornar o índice do primeiro nó com aquele elemento
    this.indexOf = function (element) {
        let current = head
        let index = 0
        while (current) {
            //current != null
            // null é equivalente a falso
            if (element == current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    // Retornar o índice do último nó com aquele elemento
    this.lastIndexOf = function (element) {
        let current = tail
        let index = length - 1
        while (current) {
            if (element == current.element) {
                return index
            }
            current = current.prev
            index--
        }
        return -1
    }

    // Verificar se a lista está vazia
    this.isEmpty = function () {
        return length == 0
    }

    // Retorna o tamanho da lista
    this.size = function () {
        return length
    }

    // Retorna o elemento do nó da posição recebida
    this.get = function (position) {
        if (position >= 0 && position < length) {
            // Se estiver entre o começo e a metade é melhor começar pela cabeça
            let current = null
            if (position < Math.ceil(length / 2)) {
                current = head
                let i = 0
                while (i < position) {
                    current = current.next
                    i++
                }
            } else {
                current = tail
                let i = length - 1
                while (i > position) {
                    current = current.prev
                    i--
                }
            }
            return current.element
        }
        return undefined
    }

    // Exibe a lista na forma de string
    this.toString = function () {
        if (this.isEmpty()) {
            return '[]'
        } else {
            let st = '['
            let current = head
            while (current) {
                st += current.element + ', '
                current = current.next
            }
            return st.slice(0, st.length - 2) + ']'
        }
    }

    // Imprime todos os elementos da lista
    this.print = function () {
        console.log(this.toString())
    }

    // Limpar a lista
    this.clear = function () {
        head = null
        tail = null
    }

    // Copiar uma lista
    this.clone = function () {}

    // Gera um array a partir da linked list
    this.toArray = function () {
        let array = []
        let current = head
        let i = 0
        while (current) {
            array[i] = current.element
            current = current.next
            i++
        }
        return array
    }

    this.toArrayReverse = function () {
        let array = []
        let current = tail
        let i = 0
        // current != null
        while (current) {
            array[i] = current.element
            current = current.prev
            i++
        }
        return array
    }
}

// exports.DoublyLinkedList = DoublyLinkedList
const dll = new DoublyLinkedList()
dll.append('a')
dll.append('b')
dll.append('c')
dll.append('e')
dll.append('d')
dll.append('d')
dll.append('d')
dll.append('e')

dll.print()
console.log(`e se encontra na posição ${dll.indexOf('e')}`)
console.log(`e se encontra na posição ${dll.lastIndexOf('e')}`)
console.log(dll.get(0))
console.log(dll.get(dll.size() - 1))

dll.insert('z', 0)
dll.print()
dll.insert('z', dll.size())
dll.print()
dll.insert('X', 3)
dll.insert('X', 2)
dll.print()
console.log('______________')
console.log(dll.removeAt(2))
dll.print()
