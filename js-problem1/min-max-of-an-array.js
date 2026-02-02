function findMin(a) {
   let min = a[0];
 for (let num of a){
    if(num<min){
        min = num;
    }
   }
   return min
    
}

const numbers =findMin([45,23,22,19,40,]);
console.log(numbers);


function findMax(b) {
   let max = b[0];
 for (let num of b){
    if(num>max){
        max = num;
    }
   }
   return max
    
}

const numberArray =findMax([45,23,22,19,40,]);
console.log(numberArray);