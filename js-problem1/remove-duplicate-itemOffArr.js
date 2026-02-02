function removeDuplicateItem(arr) {
   
    let notDuplicate =[];
    for (let item of arr){
        if(notDuplicate.includes(item)===false){
            notDuplicate.push(item);
        }
    }
    return notDuplicate;
    
}

let numbers = removeDuplicateItem([1,2,1,2,3,4,3,4,5,5,6,7,6]);
console.log(numbers);

let name = removeDuplicateItem(['abul', 'kabul','abul','kabul', 'ratul', 'ratul' ,'babul', 'babul' ,'abul', 'kabul']);
console.log(name);