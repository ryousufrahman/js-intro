function numbers(number) {
   let sum =0;
    for(const num of number){
        sum = num + sum;
    }
    return sum;
    
}

const theArray = numbers([2,4,6,8]);
console.log(theArray);