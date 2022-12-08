const btn = document.querySelector('#btn')
const ul  = document.querySelector('#list')


btn.addEventListener('click', () =>{
    const url = `https://reqres.in/api/users?page=2`

    fetch(url)
    .then(function(response){
        console.log(response)
        return response.json()    
    })
    .then(function(response){
        response.data.forEach(function(user) {
            let item = document.createElement('li')
            ul.appendChild(item)

            item.innerHTML = `<img src="${user.avatar}"/><span>${user.first_name}</span>`

            
        });
    })


})