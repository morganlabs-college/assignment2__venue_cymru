const navbar = document.getElementById("nav");
const hamburgerMenu = document.getElementById("hamburger");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("open");
});
