document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Function to handle category selection
    const handleCategorySelection = (event) => {
        const card = event.currentTarget;
        const categoryTitle = card.querySelector('.category-title').innerText;
        alert(`You selected: ${categoryTitle}`);
    };

    // Attach event listeners to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', handleCategorySelection);
        card.addEventListener('touchstart', handleCategorySelection);
    });
});
