function start_quiz(){
    window.alert ("The quiz is started");
    document.getElementById("bgnBtn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}

var res;
var name;

function math_mistery(){
    var num1;
    var num2;

    do {
        name = prompt("What is your name?");
    } while ( name == '' || name == null || !isNaN(name));
    
    do {
        num1 = prompt("How much is 5 + 4?");
    } while ( num1 == '' || num1 == null || isNaN(num1));

    do {
        num2 = prompt("How much is 1.2 - 1.2?");
    } while ( num2 == '' || num2 == null || isNaN(num2));
    
    
    if(parseInt(num1) == 9 && parseFloat(num2)  == 0){
        window.alert ("Dear " + name + ", congratulations, math test is solved right");
        res = true
    }
    else{
        window.alert ("Dear " + name + ", unfortunatley, math test is solved wrong");
        res = false
    }

}


function end_quiz(){
    var randomNum;
    
    if(res){
        document.write('<h1>Good job, ' + name + ". You now have a chance to participate in our raffle</h1>");
        randomNum = Math.floor( 1 + Math.random() * 1000 );
        document.write('<p>Your number is: ' + randomNum + ". Write it down so You don't forget it. Come to our stream next week to see who wins.</p>");
        document.write("<h3><a href='index.html'>Back to home page</a></h3>")
    }
    else{
        window.alert ("Unfortunatley, You can't participate, the math quiz is soved wrong, or not sovled at all!");
    }

}
