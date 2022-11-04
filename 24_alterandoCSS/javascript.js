var body = document.querySelector('body')


var titulo = document.createElement('h1')
var div1 = document.createElement('div')



titulo.innerHTML = "Titulo da pagina"
div1.innerHTML = "DIV"


body.appendChild(titulo)
body.appendChild(div1)

//Mudando CSS
titulo.style.color = "purple"
titulo.style.backgroundColor = 'yellow'


//Varias regras de CSS no mesmo elemento:
div1.style.cssText="height:150px; width:150px; background-color:red;text-align:center; padding:10px; box-sizing:border-box;"