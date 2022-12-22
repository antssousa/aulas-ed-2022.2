function LinkedList() {
    // Nó da lista (Armazena o elemento e aponta para o próximo elemento)
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    // Aponta para o primeiro nó da lista
    let head = null
    // Quantidade de nós na lista
    let length = 0

    // Inserir um nó no final da lista
    this.append = function (element) {
        let node = new Node(element)

        if (this.isEmpty()) {
            head = node
        } else {
            let current = head
            while (current.next) {
                // while (current.next != null)
                current = current.next
            }
            current.next = node
        }
        length++
    }

    // Inserir um nó numa posição específica
    this.insert = function (element, position) {
        if (position >= 0 && position <= length) {
            let newNode = new Node(element)
            if (position == 0) {
                newNode.next = head
                head = newNode
            } else {
                let previous = null
                let current = head
                let i = 0
                while (i < position) {
                    previous = current
                    current = current.next
                    i++
                }
                previous.next = newNode
                newNode.next = current
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
            } else {
                let previous = null
                let i = 0
                while (i < position) {
                    previous = current
                    current = current.next
                    i++
                }
                previous.next = current.next
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
        let index = -1
        while (current) {
            //current != null
            // null é equivalente a falso
            index++
            if (element == current.element) {
                return index
            }
            current = current.next
        }
        return index
    }

    // Retornar o índice do último nó com aquele elemento
    this.lastIndexOf = function (element) {
        let current = head
        let index = -1
        let i = 0
        while (current) {
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
            let current = head
            let i = 0
            while (i < position) {
                current = current.next
                i++
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
    }

    // Copiar uma lista
    this.clone = function () {
        const ll = new LinkedList()
        // for (let i = 0; i < length; i++) {
        //     ll.append(this.get(i)) 1 + 2 + 3 + 4 + 5
        // }
        current = head
        while (current) {
            ll.append(current.element) // 5
            current = current.next
        }

        return ll
    }

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
}

function Queue() {
    const ll = new LinkedList()
    // Enfileirar
    this.enqueue = function (element) {
        ll.append(element)
    }

    // Desenfileirar
    this.dequeue = function () {
        return ll.removeAt(0)
    }

    // Limpar a fila (remover todos os elementos)
    this.clear = function () {
        ll.clear()
    }

    // Tamanho da fila
    this.size = function () {
        return ll.size()
    }

    // Mostrar o primeiro elemento da fila
    this.front = function () {
        return ll.get(0)
    }

    // Mostrar o último elemento da fila
    this.back = function () {
        return ll.get(ll.size() - 1)
    }

    // Imprimir os elementos da fila
    this.print = function () {
        ll.print()
    }

    // Verificar se a fila está vazia
    this.isEmpty = function () {
        return ll.isEmpty()
    }
}

const q = new Queue()
q.enqueue(1)
q.print()
q.enqueue(2)
q.print()
q.enqueue(3)
q.print()
q.enqueue(4)
q.print()
q.enqueue(5)
q.print()
q.enqueue(6)
q.print()
q.dequeue()
q.print()
q.dequeue()
q.print()
q.dequeue()
q.print()
q.dequeue()
q.print()
q.dequeue()
q.print()
