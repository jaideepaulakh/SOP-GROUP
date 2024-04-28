// Add event listener to window scroll
window.addEventListener('scroll', function() {
    // Get the header element
    const header = document.querySelector('.header-div');
    const navdiv = document.querySelector('.nav-desktop');
    // Add 'scrolled' class to header when scrolling down, remove it when scrolling back to the top
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navdiv.classList.add("nav-desktop2");

    } else {
        header.classList.remove('scrolled');
        navdiv.classList.remove('nav-desktop2');
    }
});

const menuiconContainer = document.querySelector(".menu-icon-container");
const navContainer = document.querySelector(".nav-desktop");
menuiconContainer.addEventListener("click", () => {
    menuiconContainer.classList.toggle("active");
    navContainer.classList.toggle("active-nav")
})
