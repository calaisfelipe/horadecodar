const btn = document.querySelector('button')
const titulo = document.querySelector('h1')


btn.addEventListener('click', ()=>{
    location.reload()
})

setTimeout(function(){
    titulo.innerText = 'reload completo'
},1000)