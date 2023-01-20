import {areaQuadrado, perimetroQuadrado} from './quadrado.js'


// TUDO É OBJETO
const assuntos = {class:'principal',
other:'none',
ativar(){
    console.log('ativou')
},
status:'off'

}


//Arrow Functions 
//com arrow function o this aponta pro window
// usando function() dentro do objeto o this aponta pro próprio objeto
const obj = {
    exibir: function(){
    console.log(this)}
}

const obj2 = {
    exibir: () =>{
        console.log(this)
    }
}

obj.exibir()
obj2.exibir()


//Destructuring
//Muito usado no HOOK em react

const cafe = ['tres coracoes', 'pilao', 'nescafe']

const [cafe1 , cafe2 , cafe3] = cafe

console.log(cafe1)
console.log(cafe2)
console.log(cafe3)


//rest 
//midset: resto você pode armazenar aqui . resto == rest


function showList(empresa, ...cliets){
    console.log(empresa)
    console.log(cliets)
}

// google vai ser o nome da empresa e o resto é cliente
showList('google', 'felipe', 'andre', 'alexandre', 'marquin')



//spread : espalhar

const carro = { cor:'preto' , marca:'onix', ano: 2016}

//espalha os valores de carro nessa variavel nova
const carroNovo = {...carro}

console.log(carroNovo)


console.log(areaQuadrado(4))
console.log(perimetroQuadrado(8))


//module
//ja implementado no script.  import e export


//fetch

