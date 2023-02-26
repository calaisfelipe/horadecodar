// 1 - Promise

function loadSomeData() {

    return new Promise(function(resolve,reject) {

        setTimeout(() => {
            console.log('Tempo de resposta')

            const data  = {id:123 , name: 'josé' , ativo: true}

            resolve(data)

        }, 3000 )

    })

}

loadSomeData()
.then((data) => {
    console.log(data)
    return data
})
.then((newData) => console.log(`o nome é ${newData.name}`))
.catch((err) => console.log(`Erro ao carregar dados: ${err}`))

console.log('teste')

//2 arrow - function

function normal() {
    //some code here
}


const arrowFunction = () => {
    console.warn('arrow Function')
    //someCode Here
}

arrowFunction()

const arr = [2,1,6,8,9,6]

console.log( 'Even Elements: ' , arr.filter((x) => x % 2 == 0))

//3 - Destructuring

//array
const CompleteName = ['felipe' , 'silva' , 'calais']

const [firstName, midleName, lastName] = CompleteName


console.log(firstName)
console.log(midleName)
console.log(lastName)

//objeto

const usuario = {
    nome: 'jose',
    age: 30,
    email: 'jose@exemplo.com'
}


const {nome, email} = usuario 

console.log(nome)

// Destructuring nos argumentos da função . PODEROSO- USADO NO REACT

const exibedadosUsuario = ({nome, age, email }) => {
console.table(`Nome: ${nome}`)
console.table(`age: ${age}`)
console.table(`email: ${email}`)
}

exibedadosUsuario(usuario)

// 4 - Template literals

const nomeUsuario = 'Pedro'
const age = 22

console.log( `${nomeUsuario}, tem ${age} anos`)

const saldo = -2000

const message = `O seu saldo atual é ${ saldo > 0 ? `R$${saldo}`: 'negativo'}`

console.log(message)


// 5 - REST E SPREAD

// REST -> COMBINAR  - SPREAD -> ESPALHAR

//REST:
function soma(...numeros){

    return numeros.reduce((acumulator, item) => acumulator + item , 0)

}

console.log(soma(2,3,4,9,9,9,2))

//SPREAD 

const list = [ 2,3,4,5]

const newList = [9,4, ...list]
console.log(newList)

//SPREAD COM OBJETOS
const obj = { 
    name: 'felipe',
    age: 29,
    sign: 'peixes'
}

const obj2 = {
    ...obj,
    job: 'programador'

}

console.log(obj2)


//6 - CLASSES

class Carros{

    constructor(modelo, color , comb){
        this.modelo = modelo
        this.color = color
        this.comb = comb
    }

    info() {

        console.log(`Carro modelo: ${this.modelo}, ${this.color} , combustivel:${this.comb}`)
    }

}

const carro1 = new Carros('audi', 'vermelho', 'gasolina')

carro1.info()



class hatch extends Carros{

    constructor(modelo, color, comb, ano, potencia){
        super(modelo,color,comb)
        this.ano = ano
        this.potencia = potencia

    }


infoHatch(){

    console.log(`Carro modelo: ${this.modelo}, ano: ${this.ano}, ${this.color} , combustivel:${this.comb}, potencia: ${this.potencia}`)

}

}

const carro2 = new hatch('chevrolet', 'verde', 'etanol', '2016' , '100cv')

carro2.info()
carro2.infoHatch()

// 7 - Métodos Array

// map, filter, reduce , every

//MAP
const numerosD = [2,3,4,5,6,7,9]
const numerosTwo = [2,2,2,2]
const result = numerosD.map((numero) => numero + 2)
console.log(result)

//FILTER
const numerosImpares = numerosD.filter((numero) => numero % 2 !== 0)

console.log(numerosImpares)

//Reduce

const somaTotal = numerosD.reduce((total,numero) => total + numero, 4 )

console.log(somaTotal)

//every

console.log(numerosTwo.every((num) => num == 2))