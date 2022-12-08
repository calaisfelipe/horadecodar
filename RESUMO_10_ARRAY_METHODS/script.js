const data = [
    {name:'felipe', age:29, salarry: 2000, driverLicense: true},
    {name:'Maria', age:19, salarry: 4000, driverLicense: false},
    {name:'ze', age:49, salarry: 1500, driverLicense: true},
    {name:'ana', age:24, salarry: 1900, driverLicense: false},
    {name:'gabriel', age:14, salarry: 1000, driverLicense: false},
    {name:'julia', age:34, salarry: 5200, driverLicense: false}
]

//1 REVERSE

const inverso = data.reverse()
console.log(inverso)

//APLICABILIDADE: FILTROS - ORDENAR DO ULTIMO PRO PRIMEIRO

//2 FIND
const dataFind = data.find((user) => user.salarry > 5000 )
console.log(dataFind)

//RETORNA SOMENTE O ULTIMO RESULTADO ENCONTRADO- SOBRESCREVENDO

//3 Find Index

const dataFindIndex = data.findIndex((user) => user.name == 'felipe')

console.log(dataFindIndex)

//Retorna o index do item procurado



// 4 includes

const arr = [1,2,3,4,5,6]

console.log(arr.includes(5))

//Esse metodo funciona melhor com array que não tenha objetos


// 5 map - Executa algo em cada item do array e me retorna um novo array com os resultados

const mult2 = arr.map( x => x*2)
console.log(mult2)

const dataAddMap = data.map((user) => user.name += '@')
console.log(dataAddMap)


//ADICIONA UMA NOVA CHAVE COM O VALOR TRUE NOS DADOS DO OBJETO NO ARRAY
data.map((user) => user.ativo = true)
console.log(data)


//6 Filter

const hasHabilitation = data.filter((user) => user.driverLicense == true)

console.table(hasHabilitation)

//7 reduce 

const allSalary = data.reduce((totalSalary,user) => (totalSalary += user.salarry),0
)

console.log(allSalary)


//8 - ForEach

const exibeSalarios = data.forEach((user) => console.log(user.name))


//9 -some  - Retorna se algum dado corresponde ao procurado

let ganhaMil = data.some((users) => users.salarry == 1000)
console.log(ganhaMil)

//10 -every  - Retorna se todos os dados correspondem ao procurado

let statusUser = data.every((user) => user.ativo == true)
console.log(`Status:${statusUser}`)

console.table(data)