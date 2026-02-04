function analyzeMarks(marksObj){

    let totalMark =0;
     let average = 0;
     let highestmark = -Infinity;
    let lowestmark = Infinity;
    for(let subject in marksObj){
        let mark = marksObj[subject];
        totalMark = totalMark +mark;
       average = totalMark / Object.keys(marksObj).length;
       if (mark>highestmark) {
        highestmark = mark;
        
       }
       if(mark<lowestmark){
        lowestmark = mark;
       }
    }

    

    



   




    return {
        
        totalMark,
        average,

    }





}

let studentMark = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(studentMark);

