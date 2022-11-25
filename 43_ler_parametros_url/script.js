let doc = this.location
let docinfo = this.location.search

console.log(docinfo)

//query string
const urlParams  = new URLSearchParams(window.location.search)

console.log(urlParams)

//?nome=felipe
const nomeParam = urlParams.get('nome')

console.log(nomeParam)

// ?nome=felipe&idade=30
const idadeParam = urlParams.get('idade')
console.log(idadeParam)


//vem sempre como texto
console.log(typeof idadeParam)