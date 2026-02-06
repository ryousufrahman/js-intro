function finalScore (omr) {

    if(typeof omr !== "object"){
        return 'Invalid'
    }
    let sum =0;
   for(let i in omr){
    let mark = omr[i];
    sum = sum+mark;
    
    
}
  if(sum !==100 ){
    return "Invalid";

  }
  
  let rightAns = omr.right*1;
  let wrongAns = omr.wrong*0.5;
  let skip = 0;

  let totalMark = rightAns-wrongAns;

  let roundedMark = Math.round(totalMark);
  
 return roundedMark;


}


