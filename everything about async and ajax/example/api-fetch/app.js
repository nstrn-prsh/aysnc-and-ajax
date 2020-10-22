document.querySelector('#btn1').addEventListener( 'click', texti)
document.querySelector('#btn2').addEventListener( 'click', jason)
document.querySelector('#btn3').addEventListener( 'click', apiFunc)

function texti(){
    return fetch('fileT.txt')
            .then(res=>res.text())
            .then(data=>
                document.querySelector('.output').innerHTML = data
                )
            .catch(e=>console.log(e))
}

function jason(){
    return fetch('fileJ.json')
            .then(res=>res.json())
            .then(data=>{
                let output = ''
                data.forEach(post=>{
                    output += `<li>${post.email}</li>`
                })
                document.querySelector('.output').innerHTML = output
            })
            .catch(e=>console.log(e))
}

function apiFunc(){
    return fetch('https://api.github.com/users')
            .then(res=>res.text())
            .then(data=>{
                let output = ''
                data.forEach(user=>{
                    output += `<li>${user.login}</li>`
                })
                document.querySelector('.output').innerHTML = output
            })
            .catch(e=>console.log(e))
}