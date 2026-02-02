function countVwls(str) {
 let strArray = str.split('');
let count = 0;
 for (let letter of strArray){
    if(letter === "A"|| letter === 'a'){
        count =count +1
      }
    else if(letter === "E"|| letter === 'e'){
        count =count +1
         }
    else if(letter === "I"|| letter === 'i'){
        count =count +1
           }
    else if(letter === "O"|| letter === 'o'){
        count =count +1
        }
    else if(letter === "U"|| letter === 'u'){
        count =count +1
      }
    }
 return count;
    
}

console.log(countVwls("I love bangladesh and uganda"));
