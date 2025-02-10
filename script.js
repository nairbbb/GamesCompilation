document.addEventListener('DOMContentLoaded', () => {
    const navIcon = document.querySelector('.nav-icon');
    const navMenu = document.querySelector('.navigation-menu');
    
    navIcon.addEventListener('click', () => {
        // Toggle the display property of the navigation menu
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});
