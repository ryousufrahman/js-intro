function calcBill(prices, items){

    
    
    let itemCount ={};
    for(let item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++; 
        }
        else{
            itemCount[item]=1;
        }
    }

  let total =0;

  for(let item in itemCount){
       let price = prices[item];
     let  quantity = itemCount[item];
     let quantityPrice = price*quantity;
     total = total + quantityPrice;

  }


    

return {
    total: total,
    itemCount :itemCount
}
}

let products =calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 },["egg", "egg", "rice", "oil", "egg", "sugar"]
);
console.log(products);
