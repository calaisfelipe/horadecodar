const url = 'https://jsonplaceholder.typicode.com'


//Fetch Api

fetch(`${url}/comments`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error)
)


//Axios

axios.get(`${url}/todos`)
.then((response) => console.log(response.data))
.catch((error) =>console.log(error))


//async e await + Fetch API

async function getPosts(){

    try{
     const data = await fetch(`${url}/users`)
     const response = await data.json()
    
     console.log(response)
     return response 
    }
    catch{
        console.log('erro')
    }
}

getPosts()


//POST com Fetch

const msg = {title:'titulo teste',
content:'Teste teste teste',
userId: 1}


fetch(`${url}/posts`, 
{method:'POST',
headers:{
    "Content-Type":"application/json"},
body: JSON.stringify(msg)})
.then((response) => console.log(response))
.catch((error) => console.log(error))

//POST com Axios

axios.post(`${url}/posts`, msg)
.then((response) => console.log(response))
.catch((error) => console.log(error))