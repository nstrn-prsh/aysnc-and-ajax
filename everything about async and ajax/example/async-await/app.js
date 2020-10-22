let  http = new Library()

// get all
http.getFunc('https://jsonplaceholder.typicode.com/users')
        .then(users=>console.log(users))
        .catch(error=>console.log(error))

//  get one
http.getFunc('https://jsonplaceholder.typicode.com/users/5')
        .then(user=>console.log(user))
        .catch(error=>console.log(error))

//  post
let user ={
    id: 27,
    title: 'hi this is nas',
    body: 'nice to meet you'
}
http.postFunc('https://jsonplaceholder.typicode.com/users',user)
        .then(user=>console.log(user))
        .catch(error=>console.log(error))

// PUt
http.putFunc('https://jsonplaceholder.typicode.com/users/3',user)
        .then(user=>console.log(user))
        .catch(error=>console.log(error))

//  delete
http.delFunc('https://jsonplaceholder.typicode.com/users/8',user)
        .then(user=>console.log(user))
        .catch(error=>console.log(error))