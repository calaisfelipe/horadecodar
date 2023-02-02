class pessoas{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    zoeira(){
        console.log('zuei')
    }
}


const arr = [2,3,5,6]

console.log(arr)

const result = arr.map((el) => el + 2)
console.log(result)


const obj = new Object
obj.name = 'felipe'
obj.age = 29

const newArr = Object.entries(obj)

newArr[0].forEach((el) => console.log(el))



console.log(obj)


const felipe = new pessoas('felipe','silva')

console.log(felipe)




console.log('felipe'.concat('silva'))

const numero = [1,2,3,4,5]

console.log(numero.filter((el) => (el % 2) == 0))



const letra = 'felipe'
console.log(letra.split(''))



felipe.zoeira()

const data = new Date() 
console.log(Number(data))