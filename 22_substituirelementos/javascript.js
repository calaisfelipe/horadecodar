var el = document.createElement('h3')

el.classList= 'Test-class'

var texto = document.createTextNode('Texto substituto')
el.appendChild(texto)


var body = document.querySelector('body')
body.appendChild(el)


var titulo1 = document.querySelector('h1')



//substituindo - replaceChild()
// elementopai.replaceChild(elemento novo, elemento a ser substituido)
body.replaceChild(el, titulo1)