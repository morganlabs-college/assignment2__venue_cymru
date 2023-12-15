class Navbar extends HTMLElement {
    connectedCallback() {
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");

        const pages = this.parsePages([
            // All of these are RELATIVE from the src/ directory
            { title: "Home", href: "./index.html" },
            { title: "About", href: "./about/index.html" },
            { title: "What's On", href: "./#" },
            { title: "What's Available", href: "./#" },
        ], pathFromSrc);

        this.innerHTML = `
            <nav class="nav" id="nav">
                <div class="logos">
                    <img src="${pathFromSrc}/assets/logos/submark.svg" class="mobile"></img>
                    <img src="${pathFromSrc}/assets/logos/wordmark.svg" class="desktop"></img>
                </div>
                <button id="hamburger" class="mobile hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <ul class="links">
                    ${pages}
                </ul>
            </nav>
        `;

        const nav = document.getElementById("nav");
        const hamburgerMenu = document.getElementById("hamburger");

        hamburgerMenu.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    parsePages(pages, pathFromSrc) {
        let parsed = [];

        for (const { title, href } of pages) {
            const absoluteHref = `${pathFromSrc}${href.replace("./", "/")}`;

            parsed.push(`
                <li class="container cmp-btn ${window.location.pathname === absoluteHref ? "primary" : "secondary"}">
                <a href="${absoluteHref}" class="link">${title}</a>
                </li>
            `)
        }

        return parsed.join("\n");
    }
}

customElements.define("nav-bar", Navbar);

