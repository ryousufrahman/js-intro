function wordFrequency(sentence){
 let sentenceLowercase = sentence.toLowerCase();
  let words = sentenceLowercase.split(' ');
 let countWordObject ={};
 for (let word of words){
    if(countWordObject.hasOwnProperty(word)){
        countWordObject[word]++;
    }
    else{
        countWordObject[word] = 1;
    }
 }
 return countWordObject;

}

let theSentence =wordFrequency('I love JS and I love coding and JS is fun');
console.log(theSentence);