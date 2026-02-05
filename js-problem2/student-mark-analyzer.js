function analyzeMarks(marksObj){

    let totalMark =0;
     let average = 0;
     let highestmark = -Infinity;
    let lowestmark = Infinity;
    let highestSubject ='';
    let lowestSubject ='';
    for(let subject in marksObj){
        let mark = marksObj[subject];
        totalMark = totalMark +mark;
        
        if(mark>highestmark){
            highestmark = mark;
            highestSubject = subject;
        }
        if(mark<lowestmark){
            lowestmark = mark;
            lowestSubject = subject;
        }

    }
    average = totalMark / Object.keys(marksObj).length;


    return {
        
        totalMark,
        average,
        highestSubject,
        lowestSubject
      }  

}

let studentMark = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(studentMark);

