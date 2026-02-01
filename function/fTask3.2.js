function countZero(a) {
    let aArray = a.split('');
    let sum = 0;
   for(let arrayNumber of aArray){
        if(arrayNumber ==="0"){
            sum = sum+1;
        }
    }
    return sum;    
}
const binaray =countZero("1010010110");
console.log(binaray);