
//Entendendo bind

function Example(){
    console.log(this)
}

const obj = {exemplo: 'teste'}


//bind muda o contexto e scopo do this
Example = Example.bind(obj)


Example()

//Entendendo Call

const obj1 = {exemplo: 'exemplo 1',
mostrathis: function() {
    console.log(this)
}}

obj1.mostrathis()

const obj2 = {exemplo: 'exemplo 2'}


obj1.mostrathis.call(obj2)