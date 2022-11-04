
function exibir(num){
    console.log(`Resultado: ${num}`)
}

function soma(a, b, callback){
    let op = a + b;
    callback(op)
}

function multiplicacao(a, b, cb){
    let op = a * b;
    cb(op)
}

soma(4,9, exibir)

multiplicacao(222,424, exibir)
