function CircularLinkedList() {
    // Nó da lista (Armazena o elemento e aponta para o próximo elemento)
    let Node = function (element) {
        this.element = element
        this.next = null // Próximo elemento
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
            head = tail = node
            node.next = node
        } else {
            let current = head
            while (current != tail) {
                current = current.next
            }
            current.next = node
            node.next = head
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
                tail.next = node
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
                previous.next = node
                node.next = current
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
                head = head.next
                tail.next = head
            } else {
                let previous = null
                let index = 0
                while (index < position) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = current.next
                if (position == length - 1) {
                    tail = previous
                }
            }
            length--
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
        while (index < length) {
            if (element == current.element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    // Retornar o índice do último nó com aquele elemento
    this.lastIndexOf = function (element) {
        let current = head
        let index = -1
        let i = 0
        while (i < length) {
            if (element == current.element) {
                index = i
            }
            current = current.next
            i++
        }
        return index
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
            let i = 0
            let current = head
            while (i < length) {
                current = current.next
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
            let i = 0
            let current = head
            while (i < length) {
                st += current.element + ', '
                current = current.next
                i++
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
        while (i < length) {
            array[i] = current.element
            current = current.next
            i++
        }
        return array
    }

    this.toArrayReverse = function () {
        return this.toArray().toArrayReverse()
    }
}

const cll = new CircularLinkedList()
cll.append(0)
cll.print()
cll.append(1)
cll.append(2)
cll.append(3)
cll.print()
cll.insert(100, 2)
cll.print()
console.log(cll.size())
console.log(cll.removeAt(0))
cll.print()
console.log(cll.removeAt(1))
cll.print()
