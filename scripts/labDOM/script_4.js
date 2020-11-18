function processMouseMove( e ){
    if(e.ctrlKey){
        var img = document.getElementById('science-img');
        img.style.transform = "skew(20deg)";

        alert("crtlkeyon")
    }   
    if(e.altKey){

    }
    if(e.shiftKey){

    }
 
    
}

window.addEventListener( "mousedown", processMouseMove(e), false );