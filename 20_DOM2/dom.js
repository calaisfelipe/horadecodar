var titulo = document.querySelector('#tittle')
var corpo = document.querySelector('body')


titulo.textContent= 'Novo titulo';
titulo.style.color = 'blue';



var novoh2 = document.createElement('h2')
//corpo.appendChild(novoh2)

novoh2.textContent = 'sub-titulo'
novoh2.style.color = 'black'


// inserindo em um container

var divcontainer = document.querySelector('#container')

divcontainer.appendChild(novoh2);

novoh2.style.backgroundColor = 'red';
divcontainer.style.border = '3px solid blue';
divcontainer.style.backgroundColor = 'green';

//remover elementos
novoh2.remove()