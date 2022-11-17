var seletor = document.querySelector('#marcas')
var opcoes = document.querySelectorAll('option')


var text = 'ferrari'

function  selecionar(marca){
 /*   if (marca == 'ferrari'){
        opcoes[2].setAttribute('selected','')
    }*/

    switch(marca){
        case 'ferrari':
            opcoes[2].setAttribute('selected','')
            break
        
            case 'ford':
                opcoes[0].setAttribute('selected','')
                break

                case 'fiat':
                opcoes[1].setAttribute('selected','')
                break

                    case 'volkswagen':
                    opcoes[3].setAttribute('selected','')
                    break
                        default:
                        console.log('sem valor')
                        break
    }       
}

selecionar(text)