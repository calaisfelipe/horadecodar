function somainfinita(){

    //argumento infinito
    var args = [].slice.call(arguments,0)

    console.log(args)

    //soma infinita
    var soma = 0

    for( var i = 0; i< args.length; i++){
        soma += args[i]
    }

    return soma
}


var soma1 = somainfinita(1, 2, 3)
var soma2 = somainfinita(999, 2132,24214,1424124)

console.log(soma2)