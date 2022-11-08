
//Seleciona o Input TEXTO
const text1 = document.querySelector('#iname')


//Adiciona o evento de tecla pressionada
//Cria uma função com parametro e (evento)
text1.addEventListener('keypress',function(e){

    if(!checkChar(e)){  //Se checkChar(e) == false
        e.preventDefault(); //Metodo que impede o evento 
    }

})

//cria a função checkChar(e)
function checkChar(e){


    //fromcharcode -> transforma em charactere
    const char = String.fromCharCode(e.keyCode)

    /*console.log(e.keyCode)
    console.log(char)*/

    const pattern = '[a-zA-Z0-9]'  //pattern == padrão 
    //expressoes regulares para caracteres de A a Z e de 0 a 9

    //match() Verificar se está dentro do padrão
    if(char.match(pattern)){
        return true
    }
    //se o conteudo da variavel char atender as especificações do pattern então retorne verdadeiro
}


