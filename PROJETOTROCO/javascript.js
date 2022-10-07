
//seleção

var prod = window.document.querySelector('input#valprod')
var dinh = window.document.querySelector('input#valdin')
var res = window.document.querySelector('div#result')


// FUNÇÃO P/ CALCULAR
function calcula(){
    res.innerHTML=''
if (prod.value.length ==0 || dinh.value.length == 0){
    res.innerHTML = `Digite valores em ambos os campos`
}else if(prod.value< 0 || dinh.value< 0){
    res.innerHTML = `Valores negativos não são permitidos`
}else{
    let dimdim = dinh.value
    let produ1 = prod.value 

    var troco = (dimdim) - (produ1)
    debugger
    if(troco < 0){
        res.innerHTML += 'Esta faltando pagar: '
        res.innerHTML += `R$${troco.toFixed(2)*-1}`
    }else{
        res.innerHTML = `Seu troco é de R$${troco.toFixed(2)}`
    }

}
}
function limpa(){
    res.innerHTML = ''
    prod.focus()
    prod.value = ''
    dinh.value = ''

}