const data = new Date()

console.log(data)
let hora = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()
let dia = String(data.getDate()).padStart(2,'0')
let mes = (data.getMonth() + 1)
let year = data.getFullYear()


console.log(`${hora}:${minutos}:${segundos} do dia: ${dia}/${mes}/${year}`)