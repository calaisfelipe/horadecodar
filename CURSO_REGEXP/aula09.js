const texto2 = `
OFFLINE 192.168.144.2 ABCDEFG inactive
ONLINE 192.168.144.1 ABCDEFG inactive
OFFLINE 192.168.144.3 ABCDEFG active
ONLINE 192.168.144.4 ABCDEFG active
OFFLINE 192.168.144.5 ABCDEFG inactive`


const regexp = / .+[^in]active$/gim

//console.log(texto2.match(regexp))

// positive lookahead ?=

//console.log(`?= `+texto2.match(/.+(?=inactive)/gi))

//Negative lookahead ?!

console.log(`?!`+ texto2.match(/^(?!.+inactive).+$/gim))

// positive lookbehind ?<=

//Negative Lookbehind ?<!