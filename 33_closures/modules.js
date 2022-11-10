function ModuloMatematico() {     
    var x = 0;    

    function somaUm() {
        x++;        
        console.log(x);     
    }      
    function subtraiUm() {         
        x--;
        console.log(x);     
    }
    return {         
        somaUm: somaUm,         
        subtraiUm: subtraiUm     
    }; 
}

var teste = ModuloMatematico()

console.log(teste)