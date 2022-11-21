const texto = 'João e Maria Às margens de uma floresta existia, há muito tempo, uma cabana pobre feita de troncos de árvores, onde moravam um lenhador, sua segunda esposa e seus dois filhinhos, nascidos do primeiro casamento. O garoto chamava-se João e a menina, Maria. Na casa do lenhador, a vida sempre fora difícil, mas, naquela época, as coisas pioraram: não havia pão para todos.'

const regexp1 = /joão/gi


const result = texto.match(regexp1)
console.log(result)

const texto2 = texto.replace(/(joão)/gi , '<br>$1<br>')
console.log(texto2)