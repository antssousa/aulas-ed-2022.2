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

// Criar uma pilha a partir de uma lista ligada
function Stack() {
    const ll = new LinkedList()

    // Inserir no topo
    this.push = function (element) {
        ll.append(element)
    }

    // Remover do topo
    this.pop = function () {
        return ll.removeAt(ll.size() - 1)
    }

    // Exibir o topo
    this.peek = function () {
        return ll.get(ll.size() - 1)
    }

    // Verificar se está vazia
    this.isEmpty = function () {
        return ll.isEmpty()
    }

    // Imprimir a pilha toda
    this.print = function () {
        // ll.print()
        // console.log(ll.toString())
        // Imprimir a pilha com os elementos um embaixo do outro
        const array = ll.toArray()
        let str = ''
        for (let i = array.length - 1; i >= 0; i--) {
            str += array[i] + '\n'
        }
        console.log(str)
    }

    // Limpar a pilha
    this.clear = function () {
        ll.clear()
    }

    // Retornar o tamanho da pilha
    this.size = function () {
        return ll.size()
    }
}

const stack = new Stack()
stack.push(1)
stack.print()
stack.push(2)
stack.print()
stack.push(3)
stack.print()
console.log(stack.peek())
stack.push(4)
stack.print()
stack.push(5)
stack.print()
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())
stack.print()
