//Criando uma promise

 /*const myPromisse = new Promise( (resolve,reject) =>{

    const nome = 'felipe'

    if(nome == 'felipe'){
        resolve('Usuario encontrado')
    } else {
        reject('Usuario não encontrado')
    }

 })

 myPromisse.then((data) => console.warn(data))
 .catch((err) => console.error('ERRO- USUARIO ERRADO '+ err))*/


 //encadeamento de then ( + de 1 then -> tratativa de dados)

 const myPromisse2 = new Promise( (resolve,reject) =>{

    const nome = 'felipe'

    if(nome == 'joaopo'){
        console.log('teste')
        resolve(nome)
    } else {
        reject('Usuario não encontrado')
    }

 })


 myPromisse2.then((data) => data.toUpperCase())
 .then((stringModificada) => console.log(stringModificada))
 .catch((err) => console.log(err.toLowerCase()))



 const p1 = new Promise((resolve,reject) => {

    //simulando tempo de resposta de um servidor externo
    setTimeout(() => {
        resolve('p1 OK')
    }, 2000) 

 })

 const p2 = new Promise((resolve,reject) => {

    resolve('p2 OK')

 })

 const revolveAll = Promise.all([p1,p2])
 .then((result) => console.log(result))

 console.log('depois do all()')