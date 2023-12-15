class Hero extends HTMLElement {
    static get observedAttributes() {
        return ["type", "location", "title", "show-id", "vc-slug", "background-image"];
    }

    connectedCallback() {
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");

        const type = parseType(this.getAttribute("type"));
        const location = parseLocation(this.getAttribute("location"));
        const title = this.getAttribute("title");
        const showInfoPath = getShowInfoPage(this.getAttribute("show-id"), pathFromSrc);
        const venueCymruLink = getVcLink(this.getAttribute("vc-slug"));
        const backgroundImage = `${pathFromSrc}/` + this.getAttribute("background-image");

        this.innerHTML = `
            <article class="card hero">
                    <div class="small-info">
                        <span class="type">${type}</span>
                        <span class="seperator"></span>
                        <span class="location">${location}</span>
                </div>
                <h1>${title}</h1>
                <div class="action-row">
                    <a href="${venueCymruLink}" class="cmp-btn primary">Buy tickets</a>
                    <a href="${showInfoPath}" class="cmp-btn secondary">Read More</a>
                </div>
                <div class="gradient"></div>
                <img class="image" src="${backgroundImage}" alt="Hero image for ${title}">
            </article>
            `
    }

}

class Small extends HTMLElement {
    static get observedAttributes() {
        return ["type", "location", "title", "show-id", "vc-slug", "image"];
    }

    connectedCallback() {
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");

        const type = parseType(this.getAttribute("type"));
        const location = parseLocation(this.getAttribute("location"));
        const title = this.getAttribute("title");
        const showInfoPath = getShowInfoPage(this.getAttribute("show-id"), pathFromSrc);
        const venueCymruLink = getVcLink(this.getAttribute("vc-slug"));
        const image = `${pathFromSrc}/` + this.getAttribute("image");

        this.innerHTML = `
            <article class="card small">
                <img class="image" src="${image}" alt="Hero image for ${title}">
               <div class="small-info">
                    <span class="type">${type}</span>
                    <span class="seperator"></span>
                    <span class="location">${location}</span>
                </div>
                <h2>${title}</h2>
                <div class="action-row">
                    <a href="${venueCymruLink}" class="cmp-btn primary">Buy tickets</a>
                    <a href="${showInfoPath}" class="cmp-btn secondary">Read More</a>
                </div>
            </article>
        `
    }
}

function parseType(type) {
    switch (type) {
        case "MUS": return "Musical";
        case "FIL": return "Film";
        case "THE": return "Theatre";
    }
}

function parseLocation(location) {
    switch (location) {
        case "VenCy": return "Venue Cymru";
        case "TheCo": return "Theatr Colwyn"
    }
}

function getVcLink(slug) {
    return `https://www.venuecymru.co.uk/${slug}`;
}

function getShowInfoPage(id, pathFromSrc) {
    return `${pathFromSrc}/whats-on/${id}`;
}

customElements.define("card-hero", Hero);
customElements.define("card-small", Small);

