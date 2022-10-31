var arr = [1,2,3,4,5]

//splice - Adiciona elementos em qualquer parte do array e é possivel deletar elementos

arr.splice(4,0,999)

console.log(arr)

//deletando elemento com splice

arr.splice(5,1)
console.log(arr)

//Join - Reune os elementos do array

var arr2 = ['o', 'rato', 'roeu' , 'a' ,'roupa']

console.log(arr2.join("-"))

//reverse - inverte a posição dos elementos do array

console.log(arr2.reverse())