const url = 'https://viacep.com.br/ws/'

const btnCep = document.querySelector('#btn-cep')
const cepInput = document.querySelector('#icep')
const streetInput = document.querySelector('#irua')
const numbInput = document.querySelector('#inum')
const stateInput = document.querySelector('#iestado')
const neighoodInput = document.querySelector('#ibairro')
const cityInput = document.querySelector('#icity')
const complementoInput = document.querySelector('#icomplement')
const formCep = document.querySelector('#form-cep')


const myModal = document.getElementById('modalMine')
const fade = document.getElementById('fade')
const btnClose = document.querySelector(('#btn-close'))
const modalText = document.querySelector('#modal-text')


//GET CEP

async function getCep(location){
    try{
        const newCep = await fetch(`${url}${location}/json/`)
        const response = await newCep.json()

        if(response.erro){
            errorMsg('Cep invalido. Tente novamente')
            return
        }else{
    return response}
}
    catch{

        errorMsg('Cep invalido. Tente novamente')

    }

}

function errorToggle(){
    
    fade.classList.toggle('hide')
    myModal.classList.toggle('hide')
}


function errorMsg(error){
    modalText.innerText = error
    errorToggle()

        
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
    if(location === ''){
        errorMsg('ERRO- Favor digitar um CEP')
    }else{

    ShowCep(location) 
    }

})

cepInput.addEventListener('keypress', (e)=>{
   
   if(cepInput.value.length > 7){
    e.preventDefault()
   }


})


btnClose.addEventListener('click', ()=>{
    errorToggle()
    formCep.reset()
    cepInput.value= ''
    cepInput.focus()

})