function numbers(number) {
    let evenArray = [];
    // let evenSum = 0;
    for(let even of number){
        if(even%2===0){
        //   evenSum = even+evenSum; 
          evenArray.push(even);
        }       
    }
    
    return evenArray;

     
}

const evenNumber =numbers([1,2,3,4,5,6,7]);
console.log(evenNumber);





