function multipleParam(number, bolean) {
    if(bolean === true){
        const multiple = number*2;
        return multiple;
    }
    else{
        const triple = number*3;
        return triple;
    }
    
}

console.log(multipleParam(22,false));