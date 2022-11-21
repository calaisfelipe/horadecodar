let staff = {
    caneta: 2,
    carteira: 1,
    regua:1
}

let newSet = new Map(Object.entries(staff))
console.log(newSet)

 
console.log(newSet.size)
console.log(newSet.has('regua'))

console.log(Object.values(staff))
console.log(Object.keys(staff))
