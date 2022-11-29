//1 - Inserir dados
localStorage.setItem("name","felipe")


//2 - restart sem perder dados


//3 - resgatar item
const name = localStorage.getItem('name')
console.log(name)

console.log(localStorage.key)
console.log(localStorage.length)

//04 - Remove item
console.log(localStorage.removeItem('name'))


//5 - Remove todos os itens
localStorage.setItem("a",1)
localStorage.setItem("b",2)

localStorage.clear()


const obj = {
    name:'felipe',
    age:29,
    job:'programador'
}

const objjson = JSON.stringify(obj)

localStorage.setItem('objeto1',objjson)