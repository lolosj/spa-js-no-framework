class IndexView {
    constructor() {
        window.addEventListener("hashchange", e => this.onRoute());
        this.content = document.querySelector("#contenu");
        
        if (window.location.hash == "" || window.location.hash == '#home') {
            window.location.hash = '#home';
            this.onRoute();
        
        }
    }

    
    onRoute() {
        var hashlocation = window.location.hash;
        console.log("On route : ", hashlocation);
        this.fetchContent(hashlocation);
    }

    fetchContent(hashlocation) {
        var url = this.hashToUrl(hashlocation);
        console.log("fetchContent url : ", url);
        fetch(url).
            then( r => r.text()).
            then(content => this.updateContent(content));
    }    

    updateContent(content) {
        this.content.innerHTML = content;
    }
    hashToUrl(hash) {
        var url = hash.substring(1)+".html"
        console.log("hash2url ", hash, " --> ", url)
        return url;
    }
}

new IndexView();