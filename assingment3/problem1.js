function newPrice(currentPrice , discount ) {
 if( typeof currentPrice!== 'number'){
        return 'Invalid';
    }
    if(typeof discount !=='number'  ){
        return 'Invalid';
    }
    
    
    let discountedValue = currentPrice*discount/100;
    let calculation = currentPrice - discountedValue;
    let newPrice = calculation.toFixed(3);

    
    return newPrice;
}

let output =newPrice(500,-20);
console.log(output);
