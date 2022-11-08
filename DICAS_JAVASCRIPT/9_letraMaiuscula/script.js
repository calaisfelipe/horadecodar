var texto = "xONVERTER A PRIMEIRA LETRA DO TEXTO PARA MAIUSCULA"
var texto2= "OUTRO TEXTO SÓ DE TESTE"

function capitalize(str){

let subst = str.toLowerCase() 
let subst2 = subst.replace(subst[0],subst[0].toUpperCase()) 

return subst2
}

console.log(capitalize(texto))
console.log(capitalize(texto2))

