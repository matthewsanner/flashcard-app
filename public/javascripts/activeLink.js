const navbarLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname;

navbarLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});