function gonoVote(array) {
    if(typeof array !== "object"){
        return 'Invalid';
    }
    let haVote =[];
    let noVote=[];
   
    for(let vote of array){
        if(vote ==="ha"){
            haVote.push(vote);

        }
        else{
            noVote.push(vote);
        }      
    }

    if(haVote.length>noVote.length){
        return true;
    }
    else if (haVote.length===noVote.length){
        return 'equal'
    }
    else{
        return false;
    }


}

let a = gonoVote(["ha", "na", "ha", "na"]);
console.log(a);
