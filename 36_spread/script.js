// Utilizando spread ...

var text = ['java', 'javascript', 'python']
var op1 = [1,2,3,4]
var op2 = [5,6,7,8]
var op5 = [99,100,101]

var op3= [...op1,...op2]

console.log(op3)



// Metodo concat() - Concatenação
var op4 = op1.concat(op2)

console.log(op4)

var op5 = [...op1,'x',...op2,'Y','z',...op3]
console.log(op5)


console.log([...'will'])
console.log(...text)