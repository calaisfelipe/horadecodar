// fetch GIThub


const user = 'calaisfelipe'

fetch(`https://api.github.com/users/${user}`,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})
.then( (response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((result) => console.log(result))
.catch( (err) => console.log(`houve algum erro: ${err}`))
   