var obj = {
    veiculo1:'ferrari',
    veiculo2:'moto',
    veiculo3:'jetski',
    veiculo4:'nave'


}


//for each

Object.keys(obj).forEach(function(item){
    console.log(item + '-'+ obj[item])
})

//for in
for (var arr in obj){
    console.log(`${arr}:${obj[arr]}`)
}

//object.Entries

for (var [key,value] of Object.entries(obj)){

    console.log(`${key}:${value}`)
}


