const alfabeto = 'ABCDEFGHIJKLMNOPRSTUVXYZ abcdefghijklmnopqrstuvxyz 1234567890'


console.log( alfabeto.match(/[abc]+/gi))


//Range
console.log(alfabeto.match(/[\0]/g))

console.log(alfabeto.match(/[\S]+/g))