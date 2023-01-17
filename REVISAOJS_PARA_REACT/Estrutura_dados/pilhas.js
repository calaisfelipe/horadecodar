class stack {
    constructor() {
        this.items = []
    }

        push(element) {
            //adiciona um novo elemento na pilha
            this.items.push(element)

        }

        pop() {
            //Remove o item do topo da pilha
            return this.items.pop()

        }

        peek() {
            //devolve o elemento que está no topo da pilha
            return this.items[this.items.length - 1]

        }

        isEmpty() {
            // Retorna se a pilha está vazia ou não
            return this.items.length === 0
        }

        clear() {
            //limpa a pilha
            this.items = []
        }

        size() {
            //informa o tamanho da pilha
            return console.log(this.items.length)
        }

        print() {
            // exibe os valores da pilhas no console
            console.log(this.items.toString())
        }


   
}


var pilha = new stack


pilha.push(10)
pilha.push(11)
pilha.push(12)
pilha.push(99)
pilha.print()