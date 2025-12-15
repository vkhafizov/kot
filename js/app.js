// Main Application Entry Point
// Imports all modules and initializes the application

import { initScrollAnimations, initParallax, initCursorEffect } from './animations.js';
import { initSmoothScroll, initHeaderScroll, initMobileMenu } from './navigation.js';
import { setupEventTracking, initResponsiveHandlers, initEasterEgg } from './utils.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initScrollAnimations();
    initParallax();
    initCursorEffect();

    // Initialize navigation
    initSmoothScroll();
    initHeaderScroll();
    initMobileMenu();

    // Initialize utilities
    setupEventTracking();
    initResponsiveHandlers();
    initEasterEgg();
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
