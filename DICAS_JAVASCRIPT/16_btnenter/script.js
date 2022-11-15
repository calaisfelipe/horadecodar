let btn = document.querySelector('#btn')


btn.addEventListener('keypress', (e)=>{
   console.log(e.key)
    if(e.key === 'Enter'){
      btn.click()
    }
})