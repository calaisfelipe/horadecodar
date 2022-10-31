console.log(this)

var pessoinha = ''

let pessoa = {
    nome:'Felipe',
    idade:29,
    sexo:'M',
    falar: () => {
        console.log('olá, tudo bem?')},
    dizerNome: function(){
        console.log("O meu nome é:"+ this.nome)
    },
    aniversario: function(){
        this.idade +=1
    }
    
    }

pessoa.falar()
pessoa.dizerNome()

console.log(pessoa.idade)
pessoa.aniversario()
pessoa.aniversario()
console.log(pessoa.idade)
