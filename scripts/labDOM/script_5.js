var messagesArray = [ 
    "Enter your name in this input box.", 
    "Enter your last name in this input box.",
    "Enter your e-mail address in the format username@domain.com.",
    "Enter your password in this input, maximum length: 15 characters.", 
    "Enter your phone number in format (###) ###-####.",
    "This button submits the form to the server-side script.", 
    "This button clears the form.", 
    "" 
];


var helpText;

function init(){
    helpText = document.getElementById( "helpText" );

    registerListeners( document.getElementById( "fname" ), 0 );
    registerListeners( document.getElementById( "lname" ), 1 );
    registerListeners( document.getElementById( "email" ), 2 );
    registerListeners( document.getElementById( "password" ), 3 );
    registerListeners( document.getElementById( "tel" ), 4 );
    registerListeners( document.getElementById( "submit" ), 5 );
    registerListeners( document.getElementById( "reset" ), 6 );
}


var signupForm = document.getElementById("sign-up");

signupForm.addEventListener("submit", function(){ return confirm("Are you sure you want to submit the form?"); }, false );
signupForm.addEventListener( "reset", function() { return confirm("Are you sure you want to reset all inputs?");}, false );


function registerListeners( object, messageNumber){
    object.addEventListener( "focus", function() { helpText.innerHTML = messagesArray[messageNumber]; }, false );
    object.addEventListener( "blur", function() { helpText.innerHTML = messagesArray[7]; }, false );
} 
   
window.addEventListener( "load", init, false );