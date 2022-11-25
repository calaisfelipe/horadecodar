const texto = '123456789'
const texto2 = '23'

//1 forma
let num = Number(texto)  //deixa o js decidir se é int ou float
console.log(typeof num)
console.log(num)


//2 forma

let num2 = +texto2 //Muda para inteiro
console.log(typeof num2)
console.log(num2)

//3 forma

let num3 = Math.ceil(texto2) //arredonda para cima e muda para inteiro
console.log(typeof num3)
console.log(num3)

//4 forma
let num4 = Number.parseInt(texto) // muda para inteiro

//5 forma
let num5 = parseInt(texto)