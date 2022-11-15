var data = {
    nome:'felipe',
    sobrenome:'calais',
    age: 29,
    blog: 'www.google.com.br',
    social:{
        twitter: '@calaisfelipe',
        facebook: 'felipecalais07'
    }

}

//destructuring no objeto

var {nome, sobrenome} = data
var {facebook, twitter} = data.social
console.log(nome)
console.log(sobrenome)
console.log(twitter, facebook)

var {nome:dado1, sobrenome:dado2} = data
var {facebook:social1, twitter:social2} = data.social

console.log(
    dado1,dado2,social1,social2
)


//DESTRUCTURING NO ARRAY

 const arr = ['jose', 'matheus', 'felipe', 'maria']

 let [nam1, nam2, ,nam3] = arr

 console.log(nam1,nam2,nam3)

