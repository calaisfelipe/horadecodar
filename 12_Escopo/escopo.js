var x = 1  // variavel criada no escopo global


function evento(y){
    var soma = x+y    // variavel y criada no escopo de função 
    return soma
}

console.log(y)  // y não existe fora da função
console.log(evento(5)) 