let studentRoll = [1, 2, 3, 4 , 5, 6 , 7, 8, 9, 10 ];
 studentRoll[1] = 80 ;
 if (studentRoll[1] < 80){
     if (studentRoll[1] >= 70){
        console.log("very good mark !")
     }
     if ( studentRoll[1] >= 60){
        console.log ("need to improve")
        
     }
     if (studentRoll[1] >= 40) {
        console.log ("very poor mark")
     }
     else {
        console.log("you have failed")
     }
 }
 else{
    console.log("outstanding")
 }
 
 let totalStudent = studentRoll.length ;
 console.log("out of" , totalStudent , "student" ) ;

