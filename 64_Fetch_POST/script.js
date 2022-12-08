const inputUsuario = document.querySelector('#iname')
const inputJob = document.querySelector('#ijob')
const form = document.querySelector('#form')


console.log(inputJob,inputUsuario)

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    let dados = {
        name: inputUsuario.value,
        job: inputJob.value
    }
      console.log(dados)
      sendData(dados)
      
})


//Requisição
function sendData(dados){
    const url = `https://reqres.in/api/users/`
  fetch(url,{method: 'POST',
         body: JSON.stringify(dados)})
         .then( function(response){
            console.log(response)
            return response.json()
         }).then(function(response){
            console.log(response)
            alert('Cadastro Realizado')
         })
    
}


