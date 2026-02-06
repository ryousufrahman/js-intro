function checkPassword(password){

   let lengthOfPasword = password.length;

    
  let  hasNumber = false;
  let hasCase = false;
  let has8orMore = false;
  let falseOutput =[];
    

    
    for(let i=0; i< lengthOfPasword; i++){
     let chac = password[i];
        if(chac >= '0' && chac <= '9'){
            hasNumber = true;
            
        }
        else{
            falseOutput.push('number is missing')
        }

        
        if(chac >= 'a' && chac <= 'z' || chac >= 'A' && chac <= 'Z'){
            hasCase = true;
        }
        else{
            falseOutput.push('case is missing')
        }

        if(lengthOfPasword>=8 ){
            has8orMore = true;

        }
        else{
            falseOutput.push('length is less than 8')
        }

        
        
    }
    if(hasNumber && hasCase && has8orMore){
            return "strong password";
        }
        else{
            return falseOutput;
        }
    
    


}

let password = checkPassword("helloworld");
console.log(password);
