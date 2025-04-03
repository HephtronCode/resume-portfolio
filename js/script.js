// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');

// Enhanced hero section animations
const heroContent = document.querySelector('.hero-content');
const heroTitle = document.querySelector('.hero-title');
const heroDescription = document.querySelector('.hero-description');

// Initial state
heroContent.style.opacity = '0';
heroContent.style.transform = 'translateY(20px)';
heroTitle.style.opacity = '0';
heroTitle.style.transform = 'translateX(-20px)';
heroDescription.style.opacity = '0';
heroDescription.style.transform = 'translateX(20px)';

// Add transitions
heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
heroTitle.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
heroDescription.style.transition = 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s';

// Animate on load
window.addEventListener('load', () => {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateX(0)';
    heroDescription.style.opacity = '1';
    heroDescription.style.transform = 'translateX(0)';
    
    // Start typing effect after hero animations
    setTimeout(typeWriter, 1000);
});

// Enhanced form animations
const formGroups = document.querySelectorAll('.form-group');
const submitButton = document.querySelector('button[type="submit"]');

// Initial state
formGroups.forEach((group, index) => {
    group.style.opacity = '0';
    group.style.transform = 'translateY(20px)';
    group.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
});

submitButton.style.opacity = '0';
submitButton.style.transform = 'translateY(20px)';
submitButton.style.transition = 'opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s';

// Animate form elements when they come into view
const formObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            formGroups.forEach(group => {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            });
            submitButton.style.opacity = '1';
            submitButton.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

formObserver.observe(document.querySelector('.contact-form'));

// Enhanced form input interactions
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = 'scale(1.02)';
        input.style.boxShadow = '0 0 10px rgba(37, 99, 235, 0.2)';
    });
    
    input.addEventListener('blur', () => {
        input.style.transform = 'scale(1)';
        input.style.boxShadow = 'none';
    });
});

// Enhanced form submission animation
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Add submission animation
        submitButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitButton.style.transform = 'scale(1)';
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }, 200);
    } else {
        // Add error animation
        submitButton.style.transform = 'translateX(-5px)';
        setTimeout(() => {
            submitButton.style.transform = 'translateX(5px)';
            setTimeout(() => {
                submitButton.style.transform = 'translateX(0)';
                alert('Please fill in all fields.');
            }, 100);
        }, 100);
    }
});

// Add animation to skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.3s ease';
    observer.observe(card);

    // Add bounce effect on hover
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
        }, 300);
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// Add typing effect to hero section
const text = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
} 