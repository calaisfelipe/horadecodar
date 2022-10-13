
var btn = document.getElementById('botao') //selecionei o botão
var container = window.document.getElementById('container1') //Selecionei a div

btn.addEventListener('click', function(){  //adicionei um evento p/ o botão
    if(container.style.visibility === 'visible'){
        container.style.visibility = 'hidden'
    } else {
        container.style.visibility = 'visible'
    }
})



