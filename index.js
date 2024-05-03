// Function to toggle the mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
        hamburgerIcon.classList.add('open');
    } else {
        mobileMenu.style.display = "none";
        hamburgerIcon.classList.remove('open');
    }
}

// Add an event listener to the toggle menu button
document.getElementById('toggleMenu').addEventListener('click', toggleMobileMenu);

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add an event listener to the "Go to Top" button
document.querySelector('footer button').addEventListener('click', scrollToTop);
