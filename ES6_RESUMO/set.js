let coisa = new Set(['felipe','joao','maria'])

//Adicionando elementos no SET
coisa.add('calais')

console.log(coisa)

//Deletando elementos no SET
coisa.delete('joao')

console.log(coisa)

// Pesquisando se existe dentro do SET
console.log(coisa.has('felipe'))

// Mostra o numero de elementos que tem dentro do SET
console.log(coisa.size)

console.log(coisa.values())


// UTILIZANDO ITERABLE E ITERATOR NO SET
let interset = coisa.values()

for (name of coisa){
    console.log(name)
    console.log(interset.next())
}

