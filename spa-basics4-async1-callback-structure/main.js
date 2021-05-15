
function getContent(fragmentId, callback) {
    var contentPartials = {
        home: "This is my home page",
        page1: "This is page1",
        page2: "This is page2",
        error404: "No such page (error)"
    }
    if (fragmentId in contentPartials) {
        content = contentPartials[fragmentId];
    } else {
        content = contentPartials["error404"];
    }
    callback(content);
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

