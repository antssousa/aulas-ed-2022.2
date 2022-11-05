function Stack() {
    let item = []

    // Empilhar
    this.push = function (element) {
        item.push(element)
    }

    // Desempilhar
    this.pop = function () {
        return item.pop()
    }

    // Olhar o topo da pilha
    this.peek = function () {
        return item[item.length - 1]
    }

    // Verificar se a pilha está vazia
    this.isEmpty = function () {
        return item.length === 0
    }

    // Verificar o tamanho da pilha
    this.size = function () {
        return item.length
    }

    // Exibir a pilha no formato de uma String
    this.toString = function () {
        let str = ''
        for (let i = item.length - 1; i >= 0; i--) {
            str += item[i] + '\n'
        }
        return str
    }

    // Imprimir a pilha
    this.print = function () {
        console.log(this.toString())
    }

    // Limpar a pilha
    this.clear = function () {
        // while(!this.isEmpty()){
        //     this.pop()
        // }
        item = []
    }

    // Gerar uma pilha clone da atual
    this.clone = function () {
        let stack = new Stack()
        for (let i = 0; i < item.length; i++) {
            stack.push(item[i])
        }
        return stack
    }
}

function arrayToStack(array) {
    const stack = new Stack()
    for (let i = 0; i < array.length; i++) {
        stack.push(array[i])
    }
    return stack
}

vetor = []
for (let i = 0; i < 10; i++) {
    vetor[i] = Math.floor(Math.random() * 100)
}
console.log(vetor)

const stack = arrayToStack(vetor)
stack.print()
