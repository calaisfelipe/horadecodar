const formulario = document.querySelector('#name-form')
const inputName = document.querySelector('#iname')
const sendBtn = document.querySelector('#btn')
const usernameSpan = document.querySelector('#username')
const btnLogOut = document.querySelector('#logout')
const Welcome = document.querySelector('#welcome-container')


function checkUser(){
    const UserName = localStorage.getItem('name')

    if(UserName){
        formulario.style.display = 'none'
        Welcome.style.display = 'block'
        usernameSpan.innerHTML = UserName

    } else {
        formulario.style.display = 'block'
        Welcome.style.display = 'none'
    }

}

function RemoveAllLocalStorage(){
    localStorage.clear()
    checkUser()
}

//Inicio da aplicação
checkUser()

sendBtn.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.setItem('name',inputName.value)
    checkUser()
})


btnLogOut.addEventListener('click',function(){
    RemoveAllLocalStorage()
}
)

