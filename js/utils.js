// Utility Functions - Helpers and common functions

// Performance optimization: Debounce scroll events
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Preload critical images
export function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Analytics tracking (placeholder for future implementation)
export function trackEvent(category, action, label) {
    // This is where you'd integrate with analytics services
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Setup event tracking for buttons
export function setupEventTracking() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('Button', 'Click', this.textContent.trim());
        });
    });
}

// Add resize handler for responsive adjustments
export function initResponsiveHandlers() {
    const handleResize = debounce(function() {
        // Reset any scroll-based calculations on resize
        const header = document.querySelector('header');
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, 250);

    window.addEventListener('resize', handleResize);
}

// Easter egg: Konami code (optional fun feature)
export function initEasterEgg() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

        if (konamiCode.join('') === konamiSequence.join('')) {
            activateEasterEgg();
        }
    });
}

function activateEasterEgg() {
    // Add a fun gradient animation
    document.body.style.animation = 'rainbow 2s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}
