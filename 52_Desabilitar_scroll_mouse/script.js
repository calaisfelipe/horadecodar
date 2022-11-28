


document.addEventListener('mousedown', (e) =>{
    if( e.button == 2){
       return false
    }

    console.log(e.button)
    //e.button 1 == botao central(scroll)
    //         0 == botao esquerdo
    //         2 == botao direito
})