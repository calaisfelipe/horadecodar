let botao = document.querySelector('#btn')


botao.addEventListener('click',function NovoTexto(){

let newtext = document.querySelector('#itext')
let txt = document.querySelector('#text')
let interval = 300

    txt.innerHTML =''
    var text = newtext.value

function Digsozinho(txt,text,interval){
    let separador = text.split("")
   

  const typer = setInterval(()=>{

    if (!separador.length){
        return clearInterval(typer)
    }
    const next = separador.shift()
    txt.innerHTML += next
  }
  ,interval)
}

Digsozinho(txt,text,interval);



})


