$(document).ready(function(){
    var number = prompt("Enter number:");
    var cleanNummber = parseInt(number);
    var lHalf = 0;
    var hHalf = 0;
    if (parseInt(number) != NaN){
        lHalf = (cleanNummber + 1 ) / 2;
        hHalf = cleanNummber - lHalf;
    }
    for (var i = 1; i<= lHalf; i++){
        console.log("L");
    }
    for (var j = 1; j<= hHalf; j++){
        console.log("H");
    }
  
})
