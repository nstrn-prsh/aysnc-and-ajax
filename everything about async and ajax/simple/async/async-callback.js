const product = [
    {
        title: 'book1',
        price: 92
    },{
        title: 'book2',
        price: 55
    },{
        title: 'book3',
        price: 40
    }]

getProducts = ()=>{
    setTimeout(() => {
        const fetchProduct = product.map((item)=>`${item.title}-${item.price}`)
        console.log(fetchProduct)
    }, 2000);
}

createProduct = (callback)=>{
    setTimeout(()=>{
        product.push({
            title: 'new book',
            price: 108
        })
        callback()
    },3000)
}

createProduct(getProducts)

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

function getBasket(){
    setTimeout(()=>{
        let output = ''
        basket.forEach(x=>output+=`<p>${x.subject}</p>`)
        document.body.innerHTML = output
    },1000)
}

function addBasket( item, callback){
    setTimeout(()=>{
        basket.push(item)
        callback()
    },3000)
}

addBasket({ subject: "chair",fee: 16},getBasket)