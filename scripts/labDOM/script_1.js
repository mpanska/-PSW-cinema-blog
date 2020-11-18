var details_text = null;

function init(){
  document.getElementById("addFirstButton").addEventListener("click", addFirst, false );
  document.getElementById("appendButton").addEventListener("click", appendNode, false );
  document.getElementById("replaceButton").addEventListener("click", replace, false );
  document.getElementById("removeButton").addEventListener("click", remove, false );
  document.getElementById("details").addEventListener("click",  showDetails, false );

  details_text = document.createElement("span");
  details_text.innerHTML = "Here users share their favourite podcasts. To add a podcast type a name to text field and ther press Add. To delete press Remove.";
}

window.addEventListener( "load", init, false );



function appendNode() {
  var node = document.createElement("LI"); 
  var textnode = document.createTextNode(document.getElementById('append').value); 
  node.appendChild(textnode); 
  document.getElementById("user-list").appendChild(node);
}


function remove(){
  var list = document.getElementById("user-list");
  list.removeChild(list.childNodes[list.childNodes.length - 1]);
}

function showDetails(){
  var container = document.getElementById ("detais-text");
  if (details_text.parentNode === container) { 
      container.removeChild (details_text);
  }
  else {
      container.appendChild(details_text);
  }
}

function addFirst() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(document.getElementById('append').value);
  node.appendChild(textnode);

  var list = document.getElementById("user-list");
  list.insertBefore(node, list.childNodes[0]); 
}

//replaceChild
function replace() {
  var index = 0;
  index = parseInt(prompt("What position of the list You want to replace?"));
  
  if(index == null || isNaN(index) || index < 0){
    alert("wrong index");
    return false;
  }

  var node = document.createElement("li");
  var textnode = document.createTextNode(document.getElementById('append').value);
  node.appendChild(textnode);

  var item = document.getElementById("user-list");
  item.replaceChild(node, item.childNodes[index]);
}