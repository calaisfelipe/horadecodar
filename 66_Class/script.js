class Padaria{
    constructor(produto, sabor, tamanho){
        this.produto = produto
        this.sabor = sabor
        this.tamanho = tamanho
        this.ativo = false

    }

    static info(){
        console.log('Esta é uma classe simulando uma padaria')
    }


    //Método para descrever o produto
    productDescription(){
        console.log(`Este é um ${this.produto},tamanho ${this.tamanho}, com sabor ${this.sabor}. Status:${this.ativo}`)
    }

    //método para ativar o produto
    activeProduct(){
        this.ativo = true
    }

    //método para desativar o produto
    desactiveProduct(){
        this.ativo = false
    }

    //SETTER
    set preco(prize){
        this.prize = prize

    }
   // GETTER
    get tamanhoProduto(){
        console.log(`O tamanho do produto é: ${this.tamanho}`)
    }

}

const paoSal = new Padaria('Pão de sal','sal','Pequeno')
const paoDoce = new Padaria('Pão de doce', 'doce', 'Médio')
const teste = new Padaria('teste','teste','teste')

paoSal.productDescription()

paoDoce.productDescription()
paoDoce.activeProduct()
paoDoce.productDescription()

Padaria.info()

teste.productDescription()

console.log(Object.entries(paoDoce))


// DEFININDO UM SET
paoDoce.preco = 10

console.log(paoDoce)

// chamando o GET
paoDoce.tamanhoProduto


// EXTENSÃO DE CLASSE - HERANÇA
class bolos extends Padaria{
    constructor(produto, sabor, tamanho, tipo){
        super(produto,sabor,tamanho)
        this.tipo = tipo
    }

    Tipobolo(){
        console.log(`Este bolo é de: ${this.tipo}`)
    }


}

const boloChoq = new bolos('bolo comum','chocolate','médio','aniversario')


console.table(paoDoce)
console.table(boloChoq)
boloChoq.Tipobolo()

