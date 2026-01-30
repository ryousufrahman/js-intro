let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(let keys in myObject){
    
    console.log( "key :", keys , " |" , typeof myObject[keys]);
}
