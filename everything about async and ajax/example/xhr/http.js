class Library{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    // GET
    getPosts( url, callback){
        this.xhr.open( 'Get', url, true)
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback( null, this.xhr.responseText)
            }
            else{
                callback(`error: ${this.xhr.status}`)
            }
        }
        this.xhr.send()
    }

    // POST
    addPosts( url, data, callback){
        this.xhr.open( 'POST', url, true)
        this.xhr.setRequestHeader( 'Content-Type', 'application/json')
        this.xhr.onload = ()=>callback(this.xhr.responseText)
        this.xhr.send(JSON.stringify(data))
    }

    // PUT
    postUpdate( url, data, callback){
        this.xhr.open( 'PUT', url, true)
        this.xhr.setRequestHeader( 'Content-Type', 'application/json')
        this.xhr.send(JSON.stringify(data))
    }

    // DELETE
    postDelete( url, callback){
        this.xhr.open( 'DELETE', url, true)
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback( null, 'deleted')
            }
            else{
                callback(`error: ${this.xhr.status}`)
            }
        }
        this.xhr.send()
    }
}