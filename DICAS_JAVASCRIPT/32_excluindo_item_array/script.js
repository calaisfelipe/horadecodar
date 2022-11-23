let arr = [
    {nome:'felipe',
    job:'programador'},

    {nome:'matheus',
    job:'programador'},

    {nome:'ian',
    job:'uber'},

]

function removeItem(arr, prop, value){
    return arr.filter(function(i) {
        return i[prop] !== value})
}

var arr2 = removeItem(arr, 'nome' , 'felipe')
console.log(arr2)

