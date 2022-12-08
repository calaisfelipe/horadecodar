const divs = document.querySelectorAll('div')

console.log(divs)
divs.forEach(
    divs => divs.addEventListener('click', exibir,{capture:true})
)


function exibir(e){
    
    console.log(this.classList.value)
}