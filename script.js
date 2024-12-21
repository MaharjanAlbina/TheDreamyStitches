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

// Show the popup after 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const popup = document.querySelector('.popup');
        if (popup) {
            popup.style.display = 'block';
        }
    }, 5000);

    // Handle touch events for category cards
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            // Remove the 'touched' class from all cards
            categoryCards.forEach(c => c.classList.remove('touched'));

            // Add the 'touched' class to the current card
            card.classList.add('touched');
        });

        // Optionally, remove the 'touched' class on second tap
        card.addEventListener('touchend', () => {
            setTimeout(() => card.classList.remove('touched'), 1500);
        });
    });
});
