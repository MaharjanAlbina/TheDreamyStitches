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
