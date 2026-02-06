function textStats(text){
   
   let words= text.split(' ');
   let wordCount = words.length;

   let charactertogether = words.join('');
   let characterCount = charactertogether.length;

    
    totalVwl = 0;
    totalCons =0;

    for(let letter of charactertogether ){
        if(letter==="a" || letter==='e' || letter ==='i' || letter ==="o" || letter ==='u'){
            totalVwl++

        }
        else {
            totalCons++
        }
    }



   return {
     characters: characterCount,
     words : wordCount,
     vowels: totalVwl,
     consonants :totalCons
   } 



}

let sentence = textStats("javascript is fun to learn");
console.log(sentence);
