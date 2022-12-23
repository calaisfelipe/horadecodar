const url = 'https://viacep.com.br/ws/'

const btnCep = document.querySelector('#btn-cep')
const cepInput = document.querySelector('#icep')
const streetInput = document.querySelector('#irua')
const numbInput = document.querySelector('#inum')
const stateInput = document.querySelector('#iestado')
const neighoodInput = document.querySelector('#ibairro')
const cityInput = document.querySelector('#icity')
const complementoInput = document.querySelector('#icomplement')


//GET CEP

async function getCep(location){
    try{
        const newCep = await fetch(`${url}${location}/json/`)
        const response = await newCep.json()

    return response}
    catch{
        alert('ERRO-CEP iNVALIDO')
        cepInput.value= ''
        cepInput.focus()

    }

}

//SHOW INFORMATIONS
async function ShowCep(location){

    const newCep = await getCep(location)
    console.log(newCep)

    streetInput.value = newCep.logradouro
    stateInput.value = newCep.uf
    neighoodInput.value = newCep.bairro
    cityInput.value = newCep.localidade
    complementoInput.value = newCep.complemento
    numbInput.focus() 


    }

    //EVENTO NO BOTAO PESQUISAR
btnCep.addEventListener('click',(e) =>{
    e.preventDefault()
    const location = cepInput.value
    ShowCep(location) 
      

})


cepInput.addEventListener('keypress', (e)=>{
   
   if(cepInput.value.length > 7){
    e.preventDefault()
   }


})