
function init(){
    document.getElementById("spotify-links").addEventListener("click", showSpotifyLinks, false );
    document.getElementById("count-img-button").addEventListener("click", countImages , false );
    document.getElementById("podc-names").addEventListener("click", getAllNames , false );
}

window.addEventListener( "load", init, false );


function showSpotifyLinks(){
    var linksList = []
    for(var i = 4; i < document.links.length - 4; i++){
        linksList.push(document.links[i].href);
        linksList.push("</br>");
    }
    document.getElementById("links-list").innerHTML = linksList;

    var items = document.getElementsByTagName("div").namedItem("links-list");
    items.style.color = 'firebrick';     
}


function countImages() {
    var count = document.images.length;
    var txt = "Images amount: " + count;
    document.getElementById("images-count").innerHTML = txt;
    countAnchors();
    countFormElements();
}


function countAnchors() {
    var count = document.anchors.length;
    var txt = "Anchors amount: " + count;
    document.getElementById("anchors-count").innerHTML = txt;
}


function countFormElements() {
    var count = document.forms.length;
    var txt = "Forms amount: " + count;
    document.getElementById("form-count").innerHTML = txt;
}


function getAllNames() {
    var nodelist = [];

    for(var i = 0; i < 4; i++){
        nodelist.push(document.getElementsByTagName("h3").item(i).innerHTML);
        nodelist.push("</br>");
    }

    document.getElementById("names-list").innerHTML = nodelist;
}