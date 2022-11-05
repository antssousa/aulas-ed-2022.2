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

function decToBin(n) {
    const stack = new Stack()

    while (n != 0) {
        let resto = n % 2
        stack.push(resto)
        n = Math.floor(n / 2)
    }
    let bin = ''
    while (!stack.isEmpty()) {
        bin += stack.pop()
    }
    return bin
}

console.log(decToBin(255))
console.log(decToBin(10))
console.log(decToBin(20))
