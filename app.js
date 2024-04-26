// Add event listener to window scroll
window.addEventListener('scroll', function() {
    // Get the header element
    const header = document.querySelector('.header-div');
    // Add 'scrolled' class to header when scrolling down, remove it when scrolling back to the top
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// JavaScript to scroll to the about section when clicked
document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.querySelector('.home');
    const aboutSection = document.getElementsById('about-section');

    aboutLink.addEventListener('click', function(event) {

        // Scroll to the about section smoothly
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
