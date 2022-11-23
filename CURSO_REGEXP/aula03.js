var texto = 'João e Maria Às margens de uma floresta existia, há muito tempo, uma cabana pobre feita de troncos de árvores, onde moravam um lenhador, sua segunda esposa e seus dois filhinhos, nascidos do primeiro casamento. O garoto chamava-se João e a menina, Maria. Na casa do lenhador, a vida sempre fora difícil, mas, naquela época, as coisas pioraram: não havia pão para todos os jooooooooooão.'

var lista = [
    'Atenção.jpg',
    'bala.jpeeeeeeeeeeeeeeg',
    'regua.jpeeg',
    'caneta.JPeeeG',
    'celular.JPeeeeeeG',
    'Esposa.txt'
]

//QUANTIFICADORES (OPCIONAIS)
//*  
//+
//?


const regexp1 = /Jo+ão/gi

console.log(texto.match(regexp1))

const regexp2 = /\.jpe{0,10}g/gi

for (const item of lista){
const valido = item.match(regexp2)

if(!valido) continue;

console.log(valido)

}