//Destruturing Array

let arr = [1,2,3,4,5]
let [num1, num2, num3, num4, num5] = arr

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

//com objetos:

let pessoa = {
    nome:'felipe',
    profissao:'programador',
    idade:29
}     

let {nome: dado1, profissao: dado2,idade: dado3} = pessoa

console.log(dado1)
console.log(dado2)
console.log(dado3)

//com funções

function teste(){
    return ['teste', 45]
}

let [varA, varB] = teste()

console.log(varA)
console.log(varB)


//ignorando algum elemento

let arr2 = [10,25,30]

let [el1,,el2] = arr2

console.log(el1)
console.log(el2)

//Com string
let novastring = 'mamao'

let [x,y,z] = novastring

console.log(x,y,z)

//rest operator
let numeros2 = [1,2,3,4,5,6,7]

let [varFirst, ...resto] = numeros2

console.log(varFirst)
console.log(resto)
