function navigate() {
   
    var contenuDiv = document.getElementById("contenu");
   
    contenuDiv.innerHTML = location.hash.substr(1); // on vire le #
}

if (!location.hash) {
    location.hash = "#home";
}

navigate();

window.addEventListener("hashchange", navigate);

