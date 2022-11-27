var arr = []

var obj = {
    01:'felipe',
    02:'Maria',
    03:'zé',
    04:'jão'
}

var obj2 = {
    05:'cleber',
    06:'josuelton',
    07:'raissa bunduda'

}

arr.push(obj)
arr.push(obj2)
//console.log(arr)

//CONVERTENDO PARA ARRAY - MAP

var result = arr.map((obj) =>{
    return Object.keys(obj).map(function(key){
        return obj[key]
      
    })
})

console.log(result)
//console.error(result)
//console.warn(result)
//console.info(result)
//console.debug(result)
//console.table(result)
