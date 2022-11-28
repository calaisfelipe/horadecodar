//convertendo Json para objeto

//var response = JSON.parse(json)

// convertendo objeto para Json

var obj = {
    01:'felipe',
    02:'calais',
    03:'teste'
}


//convertendo p/JSON
var convert = JSON.stringify(obj)

console.log(convert)

//convertendo para objeto
var reconvert =JSON.parse(convert)

console.log(reconvert)