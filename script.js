// Eenvoudige interactie voor de website
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling voor navigatie
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Controleer of de link een anker is
            if (!targetId || !targetId.startsWith('#')) return;
            
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            } else {
                console.warn('Target element not found:', targetId);
            }
        });
    });
    
    // Dark mode initialiseren
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
});

// Theme toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Back to top button
window.addEventListener('scroll', function() {
    const btn = document.getElementById('backToTop');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Selecteer de opgeslagen taal
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    document.getElementById('language-select').value = savedLang;
});
function updatePageLanguage(lang) {
    const trans = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
    // Special handling for copyright symbol
    const copyrightSymbol = document.getElementById('copyrightSymbol');
    if (copyrightSymbol) {
        copyrightSymbol.innerHTML = '&copy;';
    }
}