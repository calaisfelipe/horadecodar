var altura = document.getElementById('alt')
var peso = document.getElementById('pes')
var res = document.getElementById('result')
var info = document.getElementById('info')

function calcula(){
    altura.focus()
    res.innerHTML = '' // Limpa formulario

if (altura.value.length == 0 && peso.value.length == 0){
    window.alert('Favor digitar algum valor')
} else if(altura.value <= 0 || peso.value <= 0){
    res.innerHTML = 'Impossivel calcular com valor ZERO ou NEGATIVO'
} else if(altura.value <= 3.00 && peso.value <=300){
    var altur2 = altura.value**2
    var imc = peso.value/altur2
} else{
    res.innerHTML = 'Valores Incorretos'
    info.innerHTML = ''
}
    res.innerHTML = `Seu Imc: ${imc.toFixed(1)}<br>`
info.innerHTML = `Menor do que 18,5	Abaixo do peso<br>
Entre 18,5 e 24,9	Peso normal<br>
Entre 25 e 29,9	Acima do peso (sobrepeso)<br>
Entre 30 e 34,9	Obesidade I<br>
Entre 35 e 39,9	Obesidade II<br>
Maior do que 40	Obesidade III<br>`

//res.innerHTML += `${altura.value}, ${peso.value}`
}

function limpa(){
    res.innerHTML = ''
    info.innerHTML = ''
    altura.value= ''
    peso.value= ''
    altura.focus()

}

//FORMULA DO IMC : IMC = PESO/ALTURA AO QUADRADO
