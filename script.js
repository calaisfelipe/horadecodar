// array []

//Criando um array:
var arr = []  //vazio
var arr2 = new Array(50) //com 50 indices


//adicionando elementos no array

arr.push(4)  //adiciona um elemento no final

arr.unshift(5)  // adiciona um elemento no inicio



arr2.fill('lol') // preenche o array
arr2.unshift('felipe') // adiciona um elemento no começo
console.log(arr2) 

console.log(arr2.length)


//objeto {}

var obj = {}


//adicionando elementos no objeto
obj.name = 'felipe'
obj.age = 29
obj.inutil = 'nada'
obj.soma = (num1, num2) => num1 + num2   //declarando função no objeto


console.log(obj)

//deletando dado do objeto
delete obj.inutil

console.log(obj)


obj.name = ''
console.log(obj)

console.log(obj.soma(2,2)) //chamando a função dentro do obj
