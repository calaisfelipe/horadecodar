const cpfs = 'Os cpfs são: 254.224.877-45 121.929.856-57 123.949.855-58'

const ips = '192.168.0.255 192.255.244.222 255.255.255.255  10.5.21.244 333.444.555.666 0.0.0.0'


//resolução cpf
const regexp2 = /([0-9])+\.([0-9])+\.([0-9])+(-[0-9]+)/g
const regexp3 = /(\d)+\.(\d)+\.(\d)+(-\d+)/g
const regexp4 = /(\d+\.){2}(\d)+(-\d+)/g  //Mais simplificada possivel
/*console.log(cpfs.match(regexp2))
console.log(cpfs.match(regexp3))
console.log(cpfs.match(regexp4))*/


//resolução ip
const regexpip1 = /([0-9])+\.([0-9])+\.([0-9])+\.([0-9])+/g
const regexpip2 = /(\d)+\.(\d)+\.(\d)+\.(\d)+/g
const regexpip3 = / /g

console.log(ips.match(regexpip3))




var teste = '111 222 333'

var regexpteste = /(\d){3}/g
console.log(teste.match(regexpteste))



