let text = 'paralelepipedo' // Esse é o iterable

var it = text[Symbol.iterator]() // Esse é o iterator


for (letter of text){       // Esse é o for..of que percorre todo o iterable
console.log(it.next())
}