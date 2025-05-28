// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to your backend
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', data);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.cssText = `
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            text-align: center;
        `;
        
        contactForm.appendChild(successMessage);
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.transition = 'opacity 0.5s ease-in-out';
    observer.observe(section);
});

// Add fade-in class on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
});

// Mobile navigation toggle (to be implemented)
const createMobileNav = () => {
    const nav = document.querySelector('.nav');
    const mobileNavButton = document.createElement('button');
    mobileNavButton.className = 'mobile-nav-toggle';
    mobileNavButton.innerHTML = `
        <span class="hamburger"></span>
    `;
    
    mobileNavButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    `;
    
    if (window.innerWidth <= 768) {
        mobileNavButton.style.display = 'block';
        nav.appendChild(mobileNavButton);
        
        mobileNavButton.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
};

// Initialize mobile navigation
window.addEventListener('load', createMobileNav);
window.addEventListener('resize', createMobileNav); 