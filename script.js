// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeButton) darkModeButton.textContent = '☀️ Light Mode';
    }

    // Toggle dark mode
    if (darkModeButton) {
        darkModeButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeButton.textContent = '☀️ Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeButton.textContent = '🌙 Dark Mode';
            }
        });
    }

    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
