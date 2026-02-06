function searchByPrefix(phonebook, prefix){
   let keyArr =[];
   let outputarr=[];
   for(let key in phonebook){
    keyArr.push(key);
   }

  for(let nameList of keyArr){
    if( nameList.startsWith('ra')){
        outputarr.push(nameList);

    }
  }

   return outputarr
}


let output =searchByPrefix({rahim:"018", kamal :"018", rami : "rami"}, 'ra');
console.log(output);


