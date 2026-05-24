// js/modules/navigation.js

export function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

export function initNavigation() {
    const burgerIcon = document.querySelector('.burger-icon');
    const navClose = document.querySelector('.nav-close');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Bind structural drawer activation listeners
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleMenu);
    }

    if (navClose) {
        navClose.addEventListener('click', toggleMenu);
    }

    // Attach click triggers to all menu navigation links to collapse the overlay panel automatically
    navLinks.forEach(link => {
        // Skip links that manage specialized workflows (like About Us or Careers)
        if (link.getAttribute('href') !== 'javascript:void(0)') {
            link.addEventListener('click', toggleMenu);
        }
    });
}