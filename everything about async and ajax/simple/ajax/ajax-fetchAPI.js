document.querySelector('#get-data').addEventListener( 'click', getData)
document.querySelector('#post-data').addEventListener( 'click', postData)

function httpReq( method, url, data){
    return fetch( url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type':'application/json'} : {}
    })
            .then( res =>{
                if(res.ok){
                    return res.json()
                }
                else{
                    throw error (res.status)
                }
            })
}

function getData(){
    httpReq( 'GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then( result => console.log(result) )
            .catch( error => console.log(error) )
}

function postData(){
    httpReq( 'POST', 'https://jsonplaceholder.typicode.com/posts', {
        userId: 2,
        id: 22,
        title: 'just for test',
        body: 'let\'s check'
    })
        .then( result => console.log(result) )
            .catch( error => console.log(error) )
}