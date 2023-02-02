


//Maximo valor number que o javascript compreende: 15 casas
console.log(999999999999999)

//Mais que 15 casas o número perde a precisão
console.log(9999999999999991)


const big  = BigInt('10')
console.log( typeof big)
console.log(big)


console.log(10n == 10)