const arr = [2,3,4,21,547,2]
var soma = 0
let inicial = 0


for( let i = 0; i< arr.length ; i++){
  soma += arr[i]
    
}

console.log(soma)



//reduce

let arrsoma = arr.reduce((soma,i)=>{
return soma+i}
)

console.log(arrsoma)

let arrmult = arr.reduce((mult, i) =>{
    return mult*i
})

let arrsub = arr.reduce((sub, i) =>{
    return sub - i
})

console.log(arrsub)