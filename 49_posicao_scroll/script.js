const elemento = document.querySelector('#posicao')
const eixoy = document.querySelector('#eixoy')
const eixox = document.querySelector('#eixox')
const botao = document.querySelector('#btn')
const result = document.querySelector('#result')

elemento.style.cssText = 'position:absolute; top:120px; left:50px; color:red;'


botao.addEventListener('click', ()=>{
    var valorx = eixox.value
    var valory = eixoy.value

    elemento.style.cssText=`position:absolute; top:${valory}px; left:${valorx}px;color:red; `
    console.log(valorx)
    console.log(valory)
    var coordenadas = elemento.getBoundingClientRect()

    result.innerText = `As coordenadas do elemento são: X:${coordenadas.x.toFixed(0)}, Y:${coordenadas.y.toFixed(0)}`

} )

