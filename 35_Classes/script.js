
// FORMA 01 DE SE CRIAR UM OBJETO
const posicao0 = {
    x: 90,
    y:50

}

console.log(`posicao:${posicao0.x},${posicao0.y}`)
//RESULTADO: posicao = { x:90, y:50}


//FORMA 02 DE SE CRIAR UM OBJETO
const posicao2 = new Object()
posicao2.x = 45
posicao2.y = 90

console.log(`posicao2:${posicao2}`)
//RESULTADO: posicao2 = { x:45, y:90}


//FORMA 03 DE SE CRIAR UM OBJETO
const posicao3 = {}
posicao3.x = 30
posicao3.y = 50

console.log(`posicao3:${posicao3}`)
//RESULTADO: posicao3 = { x:30, y:50}



//FORMA 04 DE SE CRIAR UM OBJETO - CONSTRUTORA - EM DESUSO

/*function posicao(x,y){
    this.x = x
    this.y = y
}

posicao.prototype.subtrai = function(outra){
    return new posicao(this.x - outra.x, this.y - outra.y)
}*/


/*const posicao6 = posicao5.subtrai(posicao4)
console.log(posicao6)*/


//FORMA 05 DE SE CRIAR UM OBJETO - CLASS  --> MAIS ATUAL <--

class posicao {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    sub(outra){
        return new posicao(this.x - outra.x, this.y - outra.y)
    }

    soma(outra){
        return new posicao(this.x + outra.x, this.y - outra.y)
    }

    mult(numero){
        return new posicao( this.x * numero, this.y * numero)
    }

    // exibe os dados ao invés de [object object]
    toString(){
        return `(${this.x},${this.y})`

    }
}

const posicao4 = new posicao(30,120)
const posicao5 = new posicao(60,70)
const posicao6 = new posicao(80,90)
const posicao7 = posicao4.sub(posicao6)
const posicao8 = posicao7.soma(posicao6)

console.log(posicao7)
console.log(posicao8)