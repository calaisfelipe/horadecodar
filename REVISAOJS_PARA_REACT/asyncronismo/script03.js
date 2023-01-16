//Async/Await 


const user = 'calaisfelipe'

async function getUser() {

try{
   const response = await fetch(`https://api.github.com/users/${user}`,{
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json'
        }})

           const data =  await response.json()

           return data
          
    }

catch{
        console.log('erro')
    }
}


// Função asyncrona AUTO-EXECUTAVEL
( async function() {
    var teste  = await getUser()
    console.log(teste)
})()

