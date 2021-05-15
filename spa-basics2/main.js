function getContent(fragmentId) {
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
    return content;
}

function navigate() {
    var contenuDiv = document.getElementById("contenu");
    var fragmentId = location.hash.substr(1);
    contenuDiv.innerHTML = getContent(fragmentId); 
}

if (!location.hash) {
    location.hash = "#home";
}

navigate();

window.addEventListener("hashchange", navigate);

