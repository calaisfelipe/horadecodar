const botao = document.querySelector('#get-parent-element')


console.log(botao.parentNode)


botao.addEventListener('click', function(){
   var element =  this.parentNode; //this se refere ao botao

   console.log(element)
   console.log(element.classList) 
   console.log(element.innerText)
})

