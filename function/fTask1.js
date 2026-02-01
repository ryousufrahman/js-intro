function numbers(a) {
    if(a%2===0){
        const double = a*2;
        return double;
    }
    else{
        const divided = a/2;
        return divided ;
    }
    
}

let number =numbers(30);
console.log(number);