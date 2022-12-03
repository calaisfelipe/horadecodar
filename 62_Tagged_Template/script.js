const body = document.querySelector('body')



function green(template, ...values){
   return template.reduce((accumulator, part, i) =>{
    console.log(i)
    return `
    ${accumulator} <span class="green">${values[i -1].toUpperCase()}</span>
    ${part}`
   })
}

function greenTeste(template, ...values){
    return template
    
}

const city = 'belo horizonte'
const bairro = 'gloria'
const nome = 'felipe'

const info = green`Eu, ${nome}, moro em ${city} no bairro ${bairro}`

body.innerHTML = info

