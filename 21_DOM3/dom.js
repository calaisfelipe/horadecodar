//criando elemento

var el = document.createElement('div')

el.classList = 'div-criada'
el.id = 'teste'

//selecionando elementos

var body = document.querySelector('body')


//Inserindo elemento filho

body.appendChild(el)

// CRIA UM <P>
var paragrafo = document.createElement('p')
el.appendChild(paragrafo);  //INSERE O <P> DENTRO DA <DIV>

paragrafo.textContent= 'Aqui vai um texto'; //TEXTO NO PARAGRAFO


var titulo = document.createElement('h2')  // CRIA UM <H2>
el.appendChild(titulo) //INSERE O <H2> DENTRO DA <DIV>

titulo.textContent= 'titulo' // TEXTO NO <H2>


// INSERE O TITULO ANTES DO PARAGRAFO
el.insertBefore(titulo, paragrafo)