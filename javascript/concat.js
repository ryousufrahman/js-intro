let array1 = [1 , 2 , 3 , 4, 5, 6];
let array2 = [7 , 8 , 9 , 10];
 let array3 = array1.concat(array2);
 let number = 5 ;

array3.pop();
console.log(array3);
console.log(Array.isArray(number));
if (array3.includes(11)){
    console.log("it do have")
}
else{
    console.log("it do not have")
}

