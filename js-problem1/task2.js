function countVwls(str) {
let lowerCaseArray = str.toLowerCase();
 let strArray = lowerCaseArray.split('');
 
  let count = 0;
 for (let letter of lowerCaseArray){

  if( letter ==="a"||letter ==='e' || letter ==='i'  || letter==='o' || letter==='u'){
    count = count+1;
  }   
}
return count
}

console.log(countVwls("I love bangladesh and uganda"));

//i shoud try a more small method later
