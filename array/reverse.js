let fruits =[ "apple" ,"orange", "mango", "jackfruits", "lichi"];

let reversed =[];

for( let i=0; i<fruits.length; i++){
    let rev = fruits[i];
    reversed.unshift(rev);
    
}
console.log(reversed);

// for(let i=fruits.length-1; i>=0; i--){
//     let revFruits = fruits[i];
//     reversed.push(revFruits);
// }
// console.log(reversed);