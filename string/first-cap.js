let sentence = " i love my country";
let words = sentence.split("")
let result =[];

for (let i= 0; i <words.length; i++){
    let word= words[i]
    let capitalizedWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizedWord);

}
let finalResult = result.join(" ");
console.log(finalResult);