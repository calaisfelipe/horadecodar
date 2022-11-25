const cpf2 = '254.224.877-47 121.222.333.46 121.929.856-47'


//começa com ^
const cpfregexp = /.{12}47/gm

console.log(cpf2.match(cpfregexp))