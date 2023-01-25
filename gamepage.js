var x=Math.floor(Math.random()*10+1);
  
var x=document.getElementById("gessField").value;
if(x==y){
    alert("CONGRETULATION!!!"+player_name+"YOU GUESS IT RIGHT IN"+guess+"GUESS");
} 
else if(x>y){
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
} 
else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER"); 
}

function playAgain(){
    y=Math.floor(Math.random()*10+1);
}
