let mark = 76 ;
let fMark = 90 ;
if (mark >= 80){
    if (fMark >= 80) {
        console.log("go for lunch")
    }
    else if ( fMark < 80 && fMark >=60){
        console.log("good luck next time")
    }
    else if ( fMark <60 && fMark >=40){
        console.log("message unseen")
    }
    else {
        console.log("blocked")
    }

}
else{
    console.log("sleep")
}