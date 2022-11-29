const url = 'https://www.google.com'
const buttonLink = document.querySelector('#btn')

// abre na mesma janela
buttonLink.addEventListener('click', function(){
    openInNewTab(url)
})


//abre em uma janela diferente

function openInNewTab(url){
    const newWindow = window.open(url, '_blank')
    newWindow.focus()
}