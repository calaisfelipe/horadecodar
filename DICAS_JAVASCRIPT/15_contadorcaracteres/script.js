const txt = document.querySelector('#itext')


txt.addEventListener('keypress',function(e){
 
const txtTamanho = txt.value.length

console.log(txtTamanho)

if(txtTamanho == 50){
    e.preventDefault()
}

})