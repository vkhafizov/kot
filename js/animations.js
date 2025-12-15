// Animation Functions - Scroll animations and parallax effects

// Intersection Observer for scroll animations
export function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px' // Trigger well before element is visible
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Apply very subtle animation that doesn't hide content
    const animatedItems = document.querySelectorAll('.value-item, .product-item, .ai-item, .tech-item, .compliance-item');

    animatedItems.forEach((item) => {
        item.style.opacity = '0.7'; // Content is visible, just slightly faded
        item.style.transform = 'translateY(10px)'; // Very subtle movement
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(item);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Subtle parallax effect on hero
export function initParallax() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.15; // Much more subtle

            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
}

// Add cursor effect for interactive elements
export function initCursorEffect() {
    const interactiveElements = document.querySelectorAll('.btn, .value-item, .product-item, .ai-item, .tech-item, .compliance-item');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}
