var titulo = document.createElement('h2')
var body  = document.querySelector('body')

body.appendChild(titulo)

titulo.innerHTML="texto comum"


//inserindo atributos
titulo.setAttribute('class', 'Classtitulos')
titulo.setAttribute('style','color:red')


console.log(titulo)


//removendo Atributo

titulo.removeAttribute('style')