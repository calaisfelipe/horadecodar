
var box = document.querySelector('#elemento')
var btn = document.querySelector('#btn')

console.log(box)
console.log(btn)

btn.addEventListener('click', function(){
    if(box.style.visibility == 'hidden'){
        box.style.visibility = 'visible'
    }else{ box.style.visibility = 'hidden'}
})
