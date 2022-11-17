var str = '    Esta strig   tem   alguns  espacos     desnecessarios    '



//console.log(str.replace(/( )+/g, " "))


function Nospace(frase) {
    return frase.replace(/( )+/g, " ")
}


console.log(Nospace('Olá         Mundo'))