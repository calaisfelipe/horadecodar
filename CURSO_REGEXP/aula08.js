
//exercicio aula04
const html = '<p> Olá mundo </p>'

const regexp4 = /<.+>.+<\/.+>/g

console.log(html.match(regexp4))




//Resolvendo com mais recursos

const regexp5 = /<(.+)>.+<\/\1>/g

console.log(html.match(/<(.+)>.+<\/\1>/g, $1))