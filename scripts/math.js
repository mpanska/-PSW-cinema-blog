function start_quiz(){
    window.alert ("The quiz is started");
    document.getElementById("bgnBtn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("raffle-btn").style.display = "none";
}

var res;
var name;

function math_mistery(){
    var answers = [];
    var wrong = 0;
    var right = 0;
    var num1;
    var num2;
    var num3;
    var num4;

    do {
      name = prompt("What is your name?");
    } while ( name == "" || name == null || !isNaN(name));
    
    do {
      num1 = prompt("How much is 5 + 4?");
    } while ( num1 == "" || num1 == null || isNaN(num1));

    do {
      num2 = prompt("How much is 1.2 - 1?");
    } while ( num2 == "" || num2 == null || isNaN(num2));

    do {
      num3 = prompt("How much is 777 - 7?");
    } while ( num3 == "" || num3 == null || isNaN(num3));

    do {
      num4 = prompt("How much is 5 - 5?");
    } while ( num4 == "" || num4 == null || isNaN(num4));
    
    if(parseInt(num1) == 9)
      answers[0] = true;
    else
      answers[0] = false;
    
    if(parseFloat(num2) == 0.2)
      answers[1] = true;
    else
      answers[1] = false;

    if(parseInt(num3) == 770)
      answers[2] = true;
    else
      answers[2] = false;

    if(parseInt(num4) == 0)
      answers[3] = true;
    else
      answers[3] = false;
    
    for(var i = 0; i < answers.length; i++){
      if(answers[i] == true)
        right++;
      else
        wrong++;
    }

    if(right == answers.length){
        window.alert ("Dear " + name + ", congratulations, math test is solved right");
        res = true
    }
    else{
        window.alert ("Righs answers: " + right + ", wrong:" + wrong + ". Dont worry, maybe next time.");
        res = false
    }
}


function end_quiz(){
    var randomNum;
    if(res){
        document.write("<h1>Good job, " + name + ". You now have a chance to participate in our raffle</h1>");
        randomNum = Math.floor( 1 + Math.random() * 1000 );
        document.write("<p>Your number is: " + randomNum + ". Write it down so You don't forget it. Come to our stream next week to see who wins.</p>");
        document.write("<h3><a href='index.html'>Back to home page</a></h3>")
    }
    else{
        window.alert ("Unfortunatley, You can't participate, the math quiz is soved wrong, or not sovled at all!");
    }
}


function raffle_day(){
    var day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }

    var raffle = document.getElementById("divForUpdate");

    if(day == "Wednesday" || day == "Thursday"){
      raffle.innerHTML = "<p>You're lucky, today is the raffle day!</p>";
      document.getElementById("bgnBtn").style.display = "block";
    }
    else{
      raffle.innerHTML = "<p>Today we don't do any raffles, come back at Wednesday or Thursday</p>";
    }
} 
