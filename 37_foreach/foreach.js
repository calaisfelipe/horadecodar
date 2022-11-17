let arr = [99,95,66,64,32]


//some mais dois em cada elemento do array
var arrmais = arr.forEach((numero) => console.log(numero+2));


//imprimir os numeros do array

var arrmais = arr.forEach((numero) => console.log(numero) )


//Escrevendo algo a mais
var arrmais = arr.forEach((numero) => {
    console.log(numero+'felipe')
}
 )

 //consigo usar foreach no objeto??

 var obj = {
    nome:'felipe',
    idade:29,
    signo:'peixes'
 }

arr.forEach((numero,indice) =>{
    return console.log('$'+numero,indice)
 })


var arr2 = arr.map((numero)=>{
    return numero + 2
})

console.log(arr2)