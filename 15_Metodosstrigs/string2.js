//Lowercase e Uppercase

var frase = 'Eu, vi, tres, tigres, tristes'

var fraseMinuscula = frase.toLowerCase()

var fraseMaiuscula = frase.toUpperCase()


console.log(fraseMinuscula)
console.log(fraseMaiuscula)

//trim  - Retira o espaçamento

var nome = '     Felipe     calaiss     '
var nometrim = nome.trim()

console.log(nometrim)


//split

var arr = frase.split(",")

console.log(arr)
console.log(frase.split(", "))


//lastindexof

var invertfrase = "quero  a frase ultima palavra desta frase"

console.log(invertfrase.lastIndexOf('frase'))
