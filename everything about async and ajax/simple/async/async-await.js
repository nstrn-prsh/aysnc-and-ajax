const product = [
    {
        title: 'book1',
        price: 92
    },
    {
        title: 'book2',
        price: 55
    },
    {
        title: 'book3',
        price: 40
    }]

getProducts = ()=>{
    setTimeout(() => {
        const fetchProduct = product.map((item)=>`${item.title}-${item.price}`)
        console.log(fetchProduct)
    }, 2000);
}

createProduct = ()=>{
    return new Promise ( ( resolve, reject)=>{
        setTimeout(()=>{
            product.push({
                title: 'new book',
                price: 108
            })
            const error = false
            if(!error)
                resolve()
            else
                reject('error')
        },3000)
    })
}

async function data(){
    await createProduct()
    getProducts()
}

data()

/**************************************/

const basket = [
    {
        subject: "laptop",
        fee: 2
    },{
        subject: "mobile",
        fee: 5
    },{
        subject: "desk",
        fee: 16
    },]

function addBasket(item){
    return new Promise( ( resolve, reject)=>{
        setTimeout(()=>{
            basket.push(item)
            let e = true
            if(!e)
                resolve(item)
            else
                reject('try again')
        },3000)
    })
}

async function getBasket(){
    try{
        const result = await addBasket({ subject: "chair",fee: 16})
        let output = ''
        basket.forEach(x=>output+=`<p>${x.subject}</p>`)
        document.body.innerHTML = output
        console.log(result)
    }
    catch(err){
        let op = ''
        op+=`<p>${err}</p>`
        document.body.innerHTML = op
    }
}

getBasket()