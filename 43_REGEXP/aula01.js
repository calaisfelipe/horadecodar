const texto = 'João e Maria Às margens de uma floresta existia, há muito tempo, uma cabana pobre feita de troncos de árvores, onde moravam um lenhador, sua segunda esposa e seus dois filhinhos, nascidos do primeiro casamento. O garoto chamava-se João e a menina, Maria. Na casa do lenhador, a vida sempre fora difícil, mas, naquela época, as coisas pioraram: não havia pão para todos.'

const regExp1 = /joão/gi

//testando pra saber se tem alguma ocorrencia:
console.log(regExp1.test(texto))


// O metodo match confronta a expressão regular com o texto e armazena na variavel as ocorrencias encontradas
let ocorrencia = texto.match(regExp1)
console.log(ocorrencia)


const found = regExp1.exec(texto)
console.log(found[0])
console.log(found.index)
console.log(found.groups)



const regExp2 = /(maria|joão)/gi 

const found2 = regExp2.exec(texto)

console.log(found2)


let ocorrencia2 = texto.match(regExp2)
console.log(ocorrencia2)