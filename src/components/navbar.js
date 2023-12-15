class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav" id="nav">
                <div class="logos">
                    <img src="assets/logos/submark.svg" class="mobile"></img>
                    <img src="assets/logos/wordmark.svg" class="desktop"></img>
                </div>
                <button id="hamburger" class="mobile hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <ul class="links">
                    <li class="container cmp-btn primary">
                        <a href="./index.html" class="link">Home</a>
                    </li>
                    <li class="container cmp-btn secondary">
                        <a href="./index.html" class="link">About</a>
                    </li>
                    <li class="container cmp-btn secondary">
                        <a href="./index.html" class="link">What's On</a>
                    </li>
                    <li class="container cmp-btn secondary">
                        <a href="./index.html" class="link">What's Available</a>
                    </li>
                </ul>
            </nav>
        `;

        const nav = document.getElementById("nav");
        const hamburgerMenu = document.getElementById("hamburger");

        hamburgerMenu.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
}

customElements.define("nav-bar", Navbar);

