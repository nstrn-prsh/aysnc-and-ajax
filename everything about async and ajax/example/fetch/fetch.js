class Library{

//  GET 
    getFunc(url){
        return new Promise( (resolve, reject)=>{ 
            fetch(url)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

// POST
    postFunc( url, data){
        return new Promise( (resolve, reject)=>{ 
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

// PUT
    putFunc( url, data){
        return new Promise( (resolve, reject)=>{ 
            fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

//  delete
    delFunc(url){
        return new Promise( (resolve, reject)=>{ 
            fetch(url,{
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res=>res.json())
            .then(resolve('user deleted'))
            .catch(error=>reject(error))
        })
    }


}
