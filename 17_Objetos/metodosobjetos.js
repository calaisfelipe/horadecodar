let pessoa = {
    nome:'Felipe',
    idade:29,
    sexo:'M',
    falar: function(){
        console.log('olá, tudo bem?')
    },
    soma: function(a,b){
        return a + b;
    }
}

console.log(pessoa.nome)
console.log(pessoa.sexo)

pessoa.falar()

console.log(pessoa.soma(2,4))