function oddAvg(arr) {

    sum = 0;
    oddArr =[];
    for(const oddNumber of arr){
        if(oddNumber%2===1){
            sum = oddNumber + sum;
            oddArr.push(oddNumber);
            
        }
    }
    const avgResult =sum/oddArr.length;
    return parseFloat( avgResult.toFixed(2) );

    
}

const numbers =oddAvg([30,31,43,22,45,39,19,21,25]);
console.log(numbers);