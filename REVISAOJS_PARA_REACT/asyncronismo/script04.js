//callback


function exibir(param){
    console.log(param)
}


function funcaoPrincipal(nome,idade){

    let juntos = `${nome} tem ${idade}`
    exibir(juntos)

}

funcaoPrincipal('felipe',29)