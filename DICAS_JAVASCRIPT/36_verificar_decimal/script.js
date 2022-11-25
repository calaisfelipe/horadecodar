var num = 1.281

function verificarFloat(num){
    if( num % 1 == 0){
        return console.log('numero inteiro')
    } else {
        return console.log('numero Real')
    }
}


verificarFloat(num)