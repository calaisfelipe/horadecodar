//Arrays

//formas de se criar um array:
var list = new Array
var arr = []
var arrNovo = ['',,0]


var arr2 = [2,4,6,78,201]

for( el in arr2){
    console.log(arr2[el])
}

console.log(arrNovo)

//adiciona elementos
arr.push(2) //final
arr.unshift(3) //inicio
 
console.log(arr)

//remove elementos
arr2.pop() //final
arr2.shift() //inicio
console.log(arr2)

//Quantos elementos tem no array
console.log(arr2.length) 


//Metodo splice array.splice(indice, numero de elementos para deletar, elemento para adicionar , ...)
arr2.splice(3,0,999,444)

//Método Join - junta todos os elementos do array
console.log(arr2.join(''))

//Método reduce - Pega todos o elementos do array e transforma em um só de acordo com a função passada
console.log(arr2.reduce((acumulador, total) => acumulador += total, 0))

//Método forEach - Realiza algo em cada elemento do array e retorna um resultado por vez.
console.log(arr2.forEach((el) => console.log(el * 2)))


// Método MAP - muito similar ao forEach só que retorna como resultado um array
const map2 = arr2.map((el) => el*2)
console.log(map2)

//metodo include - Retorna true or false para verificar se há determinado dado no array
console.log(map2.includes(1998))


//metodo indexOf , lastIndexOf

console.log(map2.indexOf(888))
console.log(map2.lastIndexOf(156))











