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

    document.addEventListener('DOMContentLoaded', () => {
        // Select all category cards and the popup
        const categoryCards = document.querySelectorAll('.category-card');
        const popup = document.querySelector('.popup');
    
        categoryCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                // Get the category title from the touched card
                const categoryTitle = card.querySelector('.category-title').innerText;
    
                // Update the popup content with the category title
                if (popup) {
                    popup.querySelector('p').innerText = `You selected: ${categoryTitle}`;
                    popup.style.display = 'block'; // Show the popup
                }
            });
        });
    
        // Close the popup when touching outside of it
        document.addEventListener('touchstart', (e) => {
            if (popup && !popup.contains(e.target) && !e.target.closest('.category-card')) {
                popup.style.display = 'none'; // Hide the popup
            }
        });
    });
 
    
    <script src="script.js"></script>
