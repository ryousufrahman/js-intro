function count_zero(a) {
    let countZero = 0;
    for(let number of a){
        if(number ===0){
            countZero = countZero+1;
        }
    }
    return countZero;
    
}
let theArray = count_zero([1,0,1,1,0,0,1,0,0]);
console.log(theArray);