document.querySelector('#get-data').addEventListener( 'click', getData)
document.querySelector('#post-data').addEventListener( 'click', postData)

function getData(){
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then( result => console.log(result) )
            .catch( error => console.log(error) )
}

function postData(){
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 2,
        id: 22,
        title: 'just for test',
        body: 'let\'s check'
    })
        .then( result => console.log(result) )
            .catch( error => console.log(error) )
}