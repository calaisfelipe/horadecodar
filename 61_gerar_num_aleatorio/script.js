



function geraNumeroAleatorio(inicio,final){
    return Math.floor(Math.random() * (final - inicio +1)) + inicio 
}

console.log(geraNumeroAleatorio(10,30))