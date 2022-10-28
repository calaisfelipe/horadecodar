let x = 20 // Escopo global
const y = 40 // const cria uma constante. a variavel ñ pode ser redeclarada

if (true){
    let x = 10   // só existe dentro do bloco 
    console.log(x)
    console.log(y)
}

console.log(x)
