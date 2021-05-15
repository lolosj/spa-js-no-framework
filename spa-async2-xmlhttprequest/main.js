function getContent(fragmentId, callback) {
    var request = new XMLHttpRequest();
    request.onload = function() { 
        callback(request.responseText);

    }
    
    request.open("GET", "content/" + fragmentId + ".html");
    request.send();
}

function setActiveLink(fragmentId){
    var navigationBar = document.getElementById("navigation-bar");
    for (i = 0; i < navigationBar.children.length; i++) { // children du div = les 3 links
        if (navigationBar.children[i].getAttribute("href").substr(1) == fragmentId) {
            navigationBar.children[i].setAttribute("class", "active");
        } else {
            navigationBar.children[i].removeAttribute("class");
        }
    } 
}


function navigate() {
    var contenuDiv = document.getElementById("contenu");
    var fragmentId = location.hash.substr(1);
    getContent(fragmentId, function (content) { contenuDiv.innerHTML = content; }); 
    setActiveLink(fragmentId);

}

if (!location.hash) {
    location.hash = "#home";
}

navigate();

window.addEventListener("hashchange", navigate);

