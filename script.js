document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Popup Functionality for Category Cards
    const categoryCards = document.querySelectorAll('.category-card');
    const popup = document.querySelector('.popup');

    categoryCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            const categoryTitle = card.querySelector('.category-title').innerText;
            popup.querySelector('p').innerText = `You selected: ${categoryTitle}`;
            popup.style.display = 'block';
        });
    });

    document.addEventListener('touchstart', (e) => {
        if (popup && !popup.contains(e.target) && !e.target.closest('.category-card')) {
            popup.style.display = 'none';
        }
    });
});
