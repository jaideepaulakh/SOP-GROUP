
const menuiconContainer = document.querySelector(".menu-icon-container");
const navContainer = document.querySelector(".nav-desktop");
menuiconContainer.addEventListener("click", () => {
    menuiconContainer.classList.toggle("active");
    navContainer.classList.toggle("active-nav")
})
