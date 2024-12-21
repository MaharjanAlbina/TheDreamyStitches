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

    // Handle touch events for category cards
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            // Remove the 'touched' class from all cards
            categoryCards.forEach(c => c.classList.remove('touched'));

            // Add the 'touched' class to the current card
            card.classList.add('touched');

            // Show the popup
            const popup = document.querySelector('.popup');
            if (popup) {
                popup.style.display = 'block';
            }
        });

        // Optionally, remove the 'touched' class on touchend
        card.addEventListener('touchend', () => {
            setTimeout(() => card.classList.remove('touched'), 1500);
        });
    });
});
