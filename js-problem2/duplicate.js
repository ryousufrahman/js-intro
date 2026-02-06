function removeDuplicates(arr){
    let splitString = arr.split(" ");
    let uniqueArr = [];
    for (let char of splitString){
        if(!uniqueArr.includes(char)){
            uniqueArr.push(char);
        }

    }
    return uniqueArr

}

let output = removeDuplicates( "i love bangladesh bangladesh"

);
console.log(output);
