let xhr = new Library()

//  GET
xhr.getPosts( 'https://jsonplaceholder.typicode.com/posts',
 (err, posts)=>{
     if(err){console.log(err)}
     else{console.log(posts)}
    })

// POST
let data = {
    "userId": 1,
    "title": "ea molestiassit aut",
    "body": "et iusto sed"
}
xhr.addPosts( 'https://jsonplaceholder.typicode.com/posts', data,
 (err, posts)=>{
     if(err){console.log(err)}
     else{console.log(posts)}
    })

// PUT
xhr.postUpdate( 'https://jsonplaceholder.typicode.com/posts/2', data,
 (err, posts)=>{
     if(err){console.log(err)}
     else{console.log(posts)}
    })

// DELETE
xhr.postDelete( 'https://jsonplaceholder.typicode.com/posts/2', 
(err, res)=>{
    if(err){console.log(err)}
    else{console.log(res)}
   }
)
