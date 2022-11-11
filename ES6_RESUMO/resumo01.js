// Object Freeze
var pessoa = {
    nome:'felipe',
    idade:22,
    job:'programador'

}

pessoa.sexo = 'M'

console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome= 'joão'

console.log(pessoa)

// ------------------------
//SHORTHAND FUNÇÃO DENTRO DO OBJETO
let nome = 'felipe'
let idade = 29
let job = 'programador'

let obj =  {
    nome,
    idade,
    job,
    hello(){
        return console.log('hello')
    }

}

obj.hello()

