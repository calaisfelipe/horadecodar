var pasto = ['vaca','boi','porco','touro','vaca','vaca']


//filter

function fazenda(animal){
    if( animal == 'vaca'){
        return 'vaca'
    }
}

console.log(pasto.filter(fazenda))


const palavras = ['tesoura', 'vassoura', 'panela', 'canela', 'capeta']

var seisletras = palavras.filter( (palavra) => palavra.length > 6 )

console.log(seisletras)




//includes 

console.log(pasto.includes('vaca'))