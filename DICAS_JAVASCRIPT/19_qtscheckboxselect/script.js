const checkboxers = document.querySelectorAll('.opcao')
const check1 = document.querySelector('#opt1')
const btntodos = document.querySelector('#btnall')
const btnclean = document.querySelector('#btnlimpa')
const btnverify = document.querySelector('#btnverificar')
const res = document.querySelector('#resultado')
var selecionados = 0


//Seleciona todos os checkboxes
btntodos.addEventListener('click', function(){
    for(let cont = 0; cont < 4; cont++ ){
 checkboxers[cont].setAttribute('checked','')}
})

//Limpa todos os checkboxes
btnclean.addEventListener('click', function(){
    res.innerHTML = ''
    for(let i = 0; i < 4; i++ ){
        if(checkboxers[i].checked){
            checkboxers[i].removeAttribute('checked','')
        }
    }
    })

//Verifica quantos checkboxes estão marcados
btnverify.addEventListener('click',(e) =>{
    e.preventDefault();
    checkboxers.forEach(function(el) {
        if(el.checked){
            selecionados++
        }

        res.innerHTML = `O numero de checkboxs selecionados é: ${selecionados}`

    })

})


