/*var x=0;

var myTimer = setTimeout( function(){
    console.log('x é 0')
},1500)

x = 5;

if(x>0){
    clearTimeout(myTimer)
    console.log('x passou de 0')
}*/

var myInterval = setInterval( function()
{console.log('intervalo :D')
},500)

setTimeout( function(){
    clearInterval(myInterval)
    console.log('fim')
},4000)