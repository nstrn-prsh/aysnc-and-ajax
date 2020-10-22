document.querySelector('#get-data').addEventListener( 'click', getData)
document.querySelector('#post-data').addEventListener( 'click', postData)

function httpReq( method, url, data){
    return new Promise( ( resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open( method, url)
        xhr.responseType = 'json'
        if(data)
            xhr.setRequestHeader( 'Content-Type', 'application/json')
        xhr.onload = ()=> resolve(xhr.response)
        xhr.onerror = ()=> reject('sth went wrong')
        xhr.send(JSON.stringify(data))
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