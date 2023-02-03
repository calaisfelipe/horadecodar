

const colection = new Map()
const objecto = ['teste2','teste3','teste4','teste5']

for(let i = 0 ; i < objecto.length ; i++){

    colection.set(objecto[i], i)
}


console.log(colection)

//colection.forEach((el) => { console.log(el + '22@')})

colection.delete('teste4')

console.log(colection)
