const options = document.querySelectorAll('.options')
const btn = document.querySelector('button')
const result = document.querySelector('#result')

btn.addEventListener('click',function(){
    for(let i = 0; i < options.length; i++){
        if(options[i].selected === true){
         var texto = options[i].innerHTML
            }
                 result.innerHTML = texto
}

})

