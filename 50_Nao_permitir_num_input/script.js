const inputText = document.querySelector('#itext')
const btn = document.querySelector('button')


inputText.addEventListener('keypress',function(e){
    let regexp = /[\d]/
    if(e.key.match(regexp)){
        e.preventDefault()
    }
})
