class Animals {

    //Rascunho/escopo da classe
    constructor(nome, souds){
        this.nome= nome
        this.souds = souds
    }

        //um metodo exclusivo da classe, não pode ser estendido para o objeto
    static info(){
        console.log('Está é uma categoria de Animais')
    }


        //um metodo da classe
     hello(){
        console.log(`${this.souds}, eu sou um ${this.nome}`)
     }   

        //Recebe um dado e adiciona ele no objeto
     set categoria(tipo){
        this.tipo = tipo
     }

     //Pega algum dado
     get categoria(){
        console.log(`Eu sou um ${this.tipo}`)
     }
}

//Cria novas classes
const dogs = new Animals('dog','auau')
const cats = new Animals('cat','Meau')
const horse = new Animals('horse','buff')

//mostra a classe cats
console.log(cats)

//executa o metodo hello() da classe
dogs.hello()
cats.hello()

//cria um indice categoria com o valor mamifero dentro do objeto dogs - SET
dogs.categoria = 'mamifero'
cats.categoria = 'felino'

//Mostra o objeto Dogs
console.log(dogs)
console.log(cats)

//GET - Pega o dado categoria e mostra na tela
dogs.categoria
cats.categoria


horse.categoria = 'equino'

horse.hello()
console.log(horse)