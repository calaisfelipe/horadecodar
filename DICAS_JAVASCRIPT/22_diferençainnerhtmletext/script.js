//selecionando elementos
const divi = document.querySelector('#teste')
const body = document.querySelector('body')

//Adiciona HTML e texto
divi.innerHTML = '<h1> Testando </h1>'

//criando um paragrafo com javascript
const paragraf = document.createElement('p')
body.appendChild(paragraf)


//Innertext - somente Texto
paragraf.innerText += ' texto'
paragraf.innerText += ' <h1>texto</h1>'