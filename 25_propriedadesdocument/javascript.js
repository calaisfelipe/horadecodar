console.log(document.body)


//HEAD
console.log(document.head)



//todos os links da pagina
console.log(document.links)

// Selecionando e alterando o primeiro link
var link1 = document.links[0]
link1.innerHTML = 'troquei nome'

//URL da pagina
console.log(document.URL)


//titulo da pagina
console.log(document.title)
document.title = "Mudei"