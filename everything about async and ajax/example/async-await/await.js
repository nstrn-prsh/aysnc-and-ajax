class Library{
//  GET 
    async getFunc(url){
        let response = await fetch(url)
        let users = await response.json()
        return users
    }


// POST
    async postFunc( url, data){
        let response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        let user = await response.json()
        return user
    }

// PUT
    async putFunc( url, data){
        let response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        let user = await response.json()
        return user
    }

//  delete
    async delFunc(url){
        let response = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        let ans = await 'user deleted'
        return ans
    }
}