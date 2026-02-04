function layeredDiscount(quantity) {
    let priceUnder100 = 100;
    let priceUnder200 = 90;
    let priceabove200 = 70;

    if(quantity <=100){
        let totalPrice = priceUnder100*quantity
        return totalPrice;
    }
    else if(quantity<=200){
        let forFirst100 = priceUnder100*100;
        let above100Quantiity = quantity-100;
        let above100Price = priceUnder200*above100Quantiity;
       let totalAbove100Price =  above100Price +forFirst100;
       return totalAbove100Price;
    }
    else{
        let forFirst100 = priceUnder100*100;
        let above100Price = priceUnder200*100;
        let aboveabove200Quantity = quantity -200;
        let above200price = aboveabove200Quantity*priceabove200;
        let totalpriceAbove200 = above200price +above100Price+forFirst100
        return totalpriceAbove200;

    }
    
}

let myCart =layeredDiscount(201);
console.log(myCart);