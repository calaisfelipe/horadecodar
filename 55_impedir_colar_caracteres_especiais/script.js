const inputTxt = document.querySelector('#itexto')

inputTxt.addEventListener('paste', function() {
    const regexp = /^[\d\w]+$/
    const self = this

    setTimeout(function(){
        const text = self.value
    

        if(!regexp.test(text)){
            self.value = ''
        }
    },50)

})