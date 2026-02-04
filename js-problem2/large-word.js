function largeWord(str) {
 let strArry = str.split(' ');
 let bigWord ='';
  for(let i=0; i<strArry.length; i++){
    if(strArry[i].length>bigWord.length){
        bigWord = strArry[i];
       }
  }
  return bigWord;
    
}
let str = largeWord("i love bangladesh veery much")
console.log(str);