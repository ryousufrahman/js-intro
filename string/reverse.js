const sentence ="I love bangladesh very much";

let reversed = "";
for (const letter of sentence){
    reversed= letter + reversed ;
}
console.log(reversed);