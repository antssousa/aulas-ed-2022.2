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

function compareStack(stack1, stack2) {
    if (stack1.size() !== stack2.size()) {
        return false
    }

    while (!stack1.isEmpty()) {
        if (stack1.pop() !== stack2.pop()) {
            return false
        }
    }
    return true
}

const stack1 = new Stack()
const stack2 = new Stack()
for (let i = 0; i < 10; i++) {
    stack1.push(i)
    stack2.push(i)
}

stack2.push(10)
// stack1.print()
// stack2.print()
if (compareStack(stack1, stack2)) {
    console.log('As pilhas sao iguais')
} else {
    console.log('As pilhas sao diferentes')
}
