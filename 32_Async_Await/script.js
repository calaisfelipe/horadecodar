//Sitanxe
function PrimeiraFuncao(){
   return new Promise((resolve)=>{
    setTimeout(() => {
        console.log('Esperou isso aqui!!')
        resolve()}
    ,1000)
})
}

async function segundaFuncao(){
    console.log('iniciou')

    await PrimeiraFuncao()

    console.log('Terminou')
}

segundaFuncao()


//Exemplo de aplicabilidade:
