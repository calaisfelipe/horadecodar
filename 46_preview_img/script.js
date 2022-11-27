const inputImg = document.querySelector('#ifile')

inputImg.addEventListener('change', function(e){
   
    const tgt = e.target || window.event.srcElement
    const files = tgt.files

    const fr = new FileReader()

    fr.onload = function(){
        document.querySelector('#preview-img').src = fr.result
    }

    fr.readAsDataURL(files[0])


})


