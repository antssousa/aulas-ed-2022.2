function Stack(length = 10) {
    let item = []
    item[length - 1] = undefined
    let top = 0

    this.isFull = function () {
        return top === length
    }

    this.push = function (element) {
        if (!this.isFull()) {
            item[top] = element
            top++
        } else {
            console.log('A pilha esta cheia')
        }
    }

    this.isEmpty = function () {
        return top === 0
    }

    this.pop = function () {
        if (!this.isEmpty()) {
            top--
            return item[top]
        } else {
            console.log('Pilha vazia')
        }
    }

    this.peek = function () {
        return item[top - 1]
    }

    this.size = function () {
        return top
    }

    this.toString = function () {
        let str = ''
        for (let i = top - 1; i >= 0; i--) {
            str += item[i] + '\n'
            // str = str + item[i] + '\n'
        }
        return str
    }

    this.print = function () {
        console.log(this.toString())
    }
}

const stack = new Stack(3)
stack.push('Antonio')
stack.print()
stack.push('Israel')
stack.print()
stack.push('Iadyla')
stack.print()
stack.push('Eduardo')
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
