// Bollo Woodfired Pizza - Italian Restaurant Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll with fire effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(139, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 4px 25px rgba(178, 34, 34, 0.4)';
        } else {
            navbar.style.background = 'rgba(139, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(178, 34, 34, 0.3)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('menu-category')) {
                    entry.target.style.animation = 'pizzaSlideIn 1s ease forwards';
                } else if (entry.target.classList.contains('feature')) {
                    entry.target.style.animation = 'ovenGlow 1.2s ease forwards';
                } else if (entry.target.classList.contains('award')) {
                    entry.target.style.animation = 'awardShine 0.8s ease forwards';
                } else {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.section-header, .about-content, .menu-category, .review, .feature, .location-content, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Italian greeting animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const italianGreeting = "Benvenuti a Bollo!";
        
        // Start with Italian greeting
        heroTitle.textContent = '';
        let i = 0;
        
        const typeItalian = () => {
            if (i < italianGreeting.length) {
                heroTitle.textContent += italianGreeting.charAt(i);
                i++;
                setTimeout(typeItalian, 120);
            } else {
                // Pause and show translation
                setTimeout(() => {
                    heroTitle.innerHTML = `${italianGreeting}<br><small style="font-size: 0.55em; opacity: 0.8; margin-top: 10px; display: block;">(Welcome to Bollo!)</small>`;
                    
                    // After a moment, show the original text
                    setTimeout(() => {
                        heroTitle.textContent = originalText;
                    }, 3000);
                }, 2000);
            }
        };
        
        setTimeout(typeItalian, 1500);
    }

    // Oven temperature animation
    function createOvenSparkle() {
        const sparkle = document.createElement('div');
        sparkle.textContent = '🔥';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = '-30px';
        sparkle.style.fontSize = '15px';
        sparkle.style.opacity = '0.8';
        sparkle.style.zIndex = '-1';
        sparkle.style.animation = 'firefall 6s linear forwards';
        sparkle.style.pointerEvents = 'none';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 6000);
    }

    // Create fire effects occasionally
    setInterval(createOvenSparkle, 4000);

    // Form submission with Italian flair
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#B22222';
                    input.style.boxShadow = '0 0 10px rgba(178, 34, 34, 0.5)';
                } else {
                    input.style.borderColor = '#CD853F';
                    input.style.boxShadow = '0 0 5px rgba(205, 133, 63, 0.3)';
                }
            });
            
            if (isValid) {
                // Simulate form submission with Italian touch
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Inviando... (Sending...)';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Grazie! (Thank you!)';
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        this.reset();
                    }, 2500);
                }, 1200);
            }
        });
    }

    // Add hover effects to pizza menu items with Italian sounds (visual effects)
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.03)';
            this.style.boxShadow = '0 8px 25px rgba(178, 34, 34, 0.2)';
            this.style.transition = 'all 0.4s ease';
            
            // Add Italian flag colors glow
            this.style.background = 'linear-gradient(90deg, rgba(178, 34, 34, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(34, 139, 34, 0.05) 100%)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = 'none';
            this.style.background = 'rgba(255, 255, 255, 0.7)';
        });
    });

    // Award animation when scrolled into view
    document.querySelectorAll('.award').forEach((award, index) => {
        const awardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'awardBounce 0.8s ease forwards';
                    }, index * 200);
                }
            });
        }, { threshold: 0.5 });
        
        award.style.opacity = '0';
        award.style.transform = 'scale(0.8)';
        awardObserver.observe(award);
    });

    // Dynamic temperature counter for the oven
    const tempCounter = document.createElement('div');
    tempCounter.style.position = 'fixed';
    tempCounter.style.top = '50%';
    tempCounter.style.right = '20px';
    tempCounter.style.transform = 'translateY(-50%)';
    tempCounter.style.background = 'rgba(178, 34, 34, 0.9)';
    tempCounter.style.color = 'white';
    tempCounter.style.padding = '15px';
    tempCounter.style.borderRadius = '10px';
    tempCounter.style.fontSize = '14px';
    tempCounter.style.fontWeight = 'bold';
    tempCounter.style.zIndex = '999';
    tempCounter.style.opacity = '0';
    tempCounter.style.transition = 'opacity 0.3s ease';
    tempCounter.innerHTML = '🔥 Oven: <span id="temp">800</span>°F';
    
    document.body.appendChild(tempCounter);
    
    // Show temperature when on menu section
    const menuSection = document.getElementById('menu');
    const tempObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tempCounter.style.opacity = '1';
                // Animate temperature
                let temp = 750;
                const tempSpan = document.getElementById('temp');
                const tempInterval = setInterval(() => {
                    if (temp < 800) {
                        temp += 2;
                        tempSpan.textContent = temp;
                    } else {
                        clearInterval(tempInterval);
                    }
                }, 50);
            } else {
                tempCounter.style.opacity = '0';
            }
        });
    }, { threshold: 0.3 });
    
    tempObserver.observe(menuSection);

    // Add ripple effect to buttons with Italian flag colors
    document.querySelectorAll('.cta-button, .contact-form button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(178,34,34,0.4) 50%, rgba(34,139,34,0.2) 100%)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.8s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });

    // Pizza spinning animation for featured items
    document.querySelectorAll('.menu-category.featured').forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(1deg) scale(1.02)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    });

    // Phone number click tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Pizza order call initiated:', this.href);
        });
    });

    // Add CSS for Italian-themed animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pizzaSlideIn {
            from {
                opacity: 0;
                transform: translateX(-80px) rotate(-5deg);
            }
            to {
                opacity: 1;
                transform: translateX(0) rotate(0deg);
            }
        }
        
        @keyframes ovenGlow {
            0% {
                opacity: 0;
                transform: scale(0.8);
                box-shadow: 0 0 0 rgba(178, 34, 34, 0);
            }
            50% {
                box-shadow: 0 0 30px rgba(178, 34, 34, 0.6);
            }
            100% {
                opacity: 1;
                transform: scale(1);
                box-shadow: 0 6px 25px rgba(178, 34, 34, 0.15);
            }
        }
        
        @keyframes awardBounce {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(20px);
            }
            60% {
                transform: scale(1.1) translateY(-5px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        @keyframes awardShine {
            0% {
                opacity: 0;
                transform: translateX(-20px);
            }
            50% {
                transform: translateX(5px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes firefall {
            0% {
                transform: translateY(-30px) rotate(0deg);
                opacity: 0.8;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(180deg);
                opacity: 0;
            }
        }
        
        .decoration:hover {
            animation-duration: 4s !important;
            font-size: 4rem !important;
            opacity: 0.6 !important;
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
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

    // Apply debounce to scroll events
    window.addEventListener('scroll', debounce(() => {
        // Additional scroll-based effects can be added here
    }, 15));

    console.log('🍕 Bollo Woodfired Pizza website loaded successfully! Buon appetito!');
});