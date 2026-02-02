const allProducts =[
    { name: 'shirt', price : 600 , quantity : 4},
    { name : 'pant', price : 800, quantity : 3 },
    { name : 'shoes' , price: 1200, quantity: 2}


]

function productCartToTalPrice(products) {
    let sum =0;
    for(let product of products){
        sum = sum + product.price*product.quantity
    }
    return sum

    
}

const myProducts =productCartToTalPrice(allProducts);
console.log(myProducts);