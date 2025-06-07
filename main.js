/**
 * NxtFi Website JavaScript
 * Main functionality for the crypto-to-fiat platform website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
                navbar.style.padding = '0.5rem 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.classList.remove('navbar-scrolled');
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = 'none';
            }
        });
    }
    
    // Modal functionality for demo request
    const demoLinks = document.querySelectorAll('a[href="#demo"]');
    const demoModal = new bootstrap.Modal(document.getElementById('demoModal'));
    
    demoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            demoModal.show();
        });
    });
    
    // Modal functionality for waitlist
    const waitlistLinks = document.querySelectorAll('a[href="#waitlist"]');
    const waitlistModal = new bootstrap.Modal(document.getElementById('waitlistModal'));
    
    waitlistLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            waitlistModal.show();
        });
    });
    
    // Form validation for demo request
    const demoForm = document.getElementById('demoForm');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!demoForm.checkValidity()) {
                e.stopPropagation();
                demoForm.classList.add('was-validated');
                return;
            }
            
            // If form is valid, show success message
            const submitBtn = demoForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
            
            // Simulate form submission
            setTimeout(() => {
                demoForm.classList.remove('was-validated');
                demoForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Show success message
                document.getElementById('demoFormSuccess').classList.remove('d-none');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('demoFormSuccess').classList.add('d-none');
                    demoModal.hide();
                }, 5000);
            }, 1500);
        });
    }
    
    // Form validation for waitlist
    const waitlistForm = document.getElementById('waitlistForm');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!waitlistForm.checkValidity()) {
                e.stopPropagation();
                waitlistForm.classList.add('was-validated');
                return;
            }
            
            // If form is valid, show success message
            const submitBtn = waitlistForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
            
            // Simulate form submission
            setTimeout(() => {
                waitlistForm.classList.remove('was-validated');
                waitlistForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Show success message
                document.getElementById('waitlistFormSuccess').classList.remove('d-none');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('waitlistFormSuccess').classList.add('d-none');
                    waitlistModal.hide();
                }, 5000);
            }, 1500);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#demo' || targetId === '#waitlist') return; // Skip demo and waitlist links as they open modals
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Counter animation for statistics
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        const animateCounter = (counter, target) => {
            const speed = 200;
            const increment = target / speed;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    // Tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.feature-card, .problem-card, .product-card, .step-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            this.style.borderColor = 'rgba(108, 92, 231, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-hide');
        
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

