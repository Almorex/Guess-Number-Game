
var ans = Math.floor(Math.random()*1001);
var moves = 10
function fn1 (){
    console.log(moves);
    var x = document.getElementById("val").value
    if (isNaN(x)){
        alert("Please Enter a Valid Number")
    }
    else if (x==ans){
        document.getElementById("result").innerHTML = "Congratulations!!! You Guessed it Correctly."
    }
    else if (x>ans){
        document.getElementById("result").innerHTML = "Your Number is too high!!!"
        moves-=1;
    }
    else{
        document.getElementById("result").innerHTML = "Your Number is too low!!!"
        moves-=1;
    }
    if (moves==0){
        document.getElementById("btn1").disabled = true
        document.getElementById("btn2").disabled = true
        document.getElementById("result").innerHTML = "You Lost the game."+"<br />"+" Refresh the browser to play Again."
    }
    document.getElementById("move").innerHTML = moves
}

function fn2(){
    alert("Use Binary Search")
}
