// Get the header element
const header = document.querySelector('.header');

// Set variables for the scroll threshold and last scroll position
const scrollThreshold = 50;
let lastScrollTop = 0;

// Function to handle scroll event
function handleScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > scrollThreshold) {
        if (st > lastScrollTop) {
            // Scrolling down
            header.classList.add('header-collapsed');
            header.classList.remove('header-visible');
        } else {
            // Scrolling up
            header.classList.remove('header-collapsed');
            header.classList.add('header-visible');
        }
    } else {
        // At the top of the page
        header.classList.remove('header-collapsed', 'header-visible');
    }
    
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

// Function to handle mouse enter event
function handleMouseEnter() {
    header.classList.remove('header-collapsed');
    header.classList.add('header-visible');
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add mouse enter event listener to the header
header.addEventListener('mouseenter', handleMouseEnter);
// Add scroll event listener
window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thank-you-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Show the thank you message
        thankYouMessage.style.display = 'block';

        contactForm.reset();

    });
});
