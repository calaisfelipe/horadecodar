var data = new Date()

var diaHj = data.getDay()
var horaHj = data.getHours()
var minutoHj = data.getMinutes()
var segundosHj = data.getSeconds()


if (minutoHj < 10){
    minutoHj = '0'+minutoHj
}
console.log(`${horaHj}:${minutoHj}:${segundosHj}`)


//diferença entre duas datas

