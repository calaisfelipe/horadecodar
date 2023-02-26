// 1 - Promise

function loadSomeData() {

    return new Promise(function(resolve,reject) {

        setTimeout(() => {
            console.log('Tempo de resposta')

            const data  = {id:123 , name: 'josé' , ativo: true}

            resolve(data)

        }, 3000 )

    })

}

loadSomeData().then((data) => console.log(data))
.catch((err) => console.log(`Erro ao carregar dados: ${err}`))