function make_avg(numbers) {
    let sum =0;
   for( let number of numbers){
    sum = number+sum;
  }  
  sum = sum/numbers.length;
  return parseFloat(sum.toFixed(2));
}

const sumOfarray =make_avg([44,55,34,12,30,98,25]);
console.log( sumOfarray);