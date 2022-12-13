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
            if (this.isEmpty()) {
                head = node
                length++
            } else {
                let i = 0
                let current = head
                console.log(current.element)
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
    this.removeAt = function (index) {}

    // Remove o elemento passado como parâmetro
    this.remove = function (element) {}

    // Retorna o índice do primeiro elemento recebido como parâmetro
    this.indexOf = function (element) {}

    // Retorna o índice do último elemento recebido como parâmetro
    this.lastIndexOf = function (element) {}

    // Retorna verdadeiro se o elemento está na linked list
    this.contains = function (element) {}

    // Retorna verdadeiro se a linked list estiver vazia
    this.isEmpty = function () {
        return head === null
    }

    // Retorna o tamanho da linked list
    this.size = function () {
        return length
    }

    // Retorna o elemento do índice passado como parâmetro
    this.get = function (index) {}

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
    this.clear = function () {}

    // Converte a linked list num array
    this.toArray = function () {}
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
