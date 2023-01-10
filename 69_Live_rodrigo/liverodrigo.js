//for in

const obj = {
    valor: 1,
    chave: 'o--*',
    ativo: true 
}

for(let key in obj){
    console.log(obj[key])
}

//object.keys / object.values / object.entries
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//transformando em JSON
const externals = JSON.stringify(obj)

console.log(externals)

//transformando em objeto
const internal = JSON.parse(externals)

console.log(internal)





