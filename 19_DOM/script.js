// Tag - Selecionando o elemento por TAG

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo)

titulo.innerText = 'Novo titulo';
titulo.style.color = 'blue';
titulo.style.fontSize = '3em';

var list = document.getElementsByTagName('li')

console.log(list[3])


// id

var paragrafo = document.getElementById('paragrafo')

console.log(paragrafo)
paragrafo.style.backgroundColor = 'red';
paragrafo.innerText = 'Sou um programador';

//classe

var itens = document.getElementsByClassName('item')

itens[0].style.color = 'green';
itens[3].style.color = 'green';


//Queryselector e QueryselectorAll

var div1 = document.querySelector('#div1')

div1.style.color = 'grey'


var div2 = document.querySelectorAll('.divis')

div2[1].style.color = 'orange'

console.log(div2)