// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


<script src="script.js"></script>

// Show the popup after 5 seconds
setTimeout(() => {
    document.querySelector('.popup').style.display = 'block';
}, 5000);
document.addEventListener('DOMContentLoaded', () => {
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
