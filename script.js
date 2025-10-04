// Liquid blur effect dla navbar - poziom digitalnie.pl
function initLiquidBlur() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    function updateBlur() {
        const scrollY = window.scrollY;
        const maxScroll = 200;
        const scrollProgress = Math.min(scrollY / maxScroll, 1);

        // Dynamiczny blur w zależności od scroll
        const baseBlur = 3;
        const maxBlur = 8;
        const currentBlur = baseBlur + (scrollProgress * (maxBlur - baseBlur));

        // Dynamiczny background opacity
        const baseOpacity = 0.02;
        const maxOpacity = 0.08;
        const currentOpacity = baseOpacity + (scrollProgress * (maxOpacity - baseOpacity));

        // Zastosuj dynamiczne style
        navbar.style.background = `rgba(0, 0, 0, ${currentOpacity})`;
        navbar.style.backdropFilter = `blur(${currentBlur}px)`;
        navbar.style.webkitBackdropFilter = `blur(${currentBlur}px)`;

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateBlur);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Rotacja słów z przewijaniem w górę
function animateRotatingWords() {
    const words = document.querySelectorAll('.rotating-word');
    if (words.length === 0) return;

    let currentIndex = 0;

    function showNextWord() {
        // Ukryj wszystkie słowa
        words.forEach(word => {
            word.classList.remove('active', 'fade-out');
        });

        // Pokaż aktualne słowo z efektem fade-up
        const currentWord = words[currentIndex];
        currentWord.classList.add('active');

        // Przejdź do następnego słowa
        currentIndex = (currentIndex + 1) % words.length;
    }

    // Rozpocznij animację
    showNextWord();

    // Zmieniaj słowa co 3 sekundy
    setInterval(showNextWord, 3000);
}

// Loading Screen
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after a short delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');

        // Remove from DOM after transition
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    // Uruchom liquid blur effect
    initLiquidBlur();

    // Uruchom animację słów
    animateRotatingWords();

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Navbar scroll effect with blue glow
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    const services = document.querySelector('.services');
    const heroSection = document.querySelector('.hero-section');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navbar.classList.add('scrolled');
        body.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        body.classList.remove('scrolled');
    }

    // Add glow to hero section when it's in view
    if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            heroSection.classList.add('scrolled');
        } else {
            heroSection.classList.remove('scrolled');
        }
    }

    // Add glow to services section when it's in view
    if (services) {
        const servicesRect = services.getBoundingClientRect();
        if (servicesRect.top < window.innerHeight && servicesRect.bottom > 0) {
            services.classList.add('scrolled');
        } else {
            services.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Automation process animation
function animateProcessNodes() {
    const nodes = document.querySelectorAll('.process-node');
    let currentIndex = 0;

    function activateNext() {
        // Remove active class from all nodes
        nodes.forEach(node => node.classList.remove('active'));

        // Add active class to current node
        if (nodes[currentIndex]) {
            nodes[currentIndex].classList.add('active');
        }

        // Move to next node
        currentIndex = (currentIndex + 1) % nodes.length;
    }

    // Start animation
    if (nodes.length > 0) {
        activateNext(); // Activate first node immediately
        setInterval(activateNext, 2000); // Change every 2 seconds
    }
}

// Rotating words animation with fade effect
function animateRotatingWords() {
    const words = document.querySelectorAll('.rotating-word');
    let currentIndex = 0;

    function rotateNext() {
        // Find current active word and add fade-out
        const currentActive = document.querySelector('.rotating-word.active');
        if (currentActive) {
            currentActive.classList.remove('active');
            currentActive.classList.add('fade-out');
        }

        // Wait for fade-out animation to complete
        setTimeout(() => {
            // Remove fade-out class from all words
            words.forEach(word => word.classList.remove('fade-out'));

            // Add active class to current word
            if (words[currentIndex]) {
                words[currentIndex].classList.add('active');
            }

            // Move to next word
            currentIndex = (currentIndex + 1) % words.length;
        }, 300); // Wait for fade-out to complete
    }

    // Start animation
    if (words.length > 0) {
        rotateNext(); // Activate first word immediately
        setInterval(rotateNext, 3000); // Change every 3 seconds
    }
}

// Start animations when page loads
document.addEventListener('DOMContentLoaded', function () {
    animateProcessNodes();
    animateRotatingWords();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', function () {
    // Service cards animation
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Portfolio items animation
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Testimonial cards animation
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        card.classList.add('slide-in-left');
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });

    // Blog cards animation
    document.querySelectorAll('.blog-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Stats animation
    document.querySelectorAll('.stat').forEach((stat, index) => {
        stat.classList.add('slide-in-right');
        stat.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(stat);
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                service: formData.get('service'),
                message: formData.get('message')
            };

            // Basic validation
            if (!data.name || !data.email || !data.service || !data.message) {
                showNotification('Proszę wypełnić wszystkie wymagane pola.', 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showNotification('Proszę podać prawidłowy adres e-mail.', 'error');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Wysyłanie...';
            submitButton.disabled = true;

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();

                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                // Show success message
                showNotification('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.', 'success');

                // In a real application, you would send the data to your server here
                console.log('Form data:', data);
            }, 2000);
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    `;

    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.blob');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isTime = target.includes('/');

        if (isPercentage) {
            const number = parseInt(target);
            animateNumber(counter, 0, number, 2000, '%');
        } else if (isTime) {
            // For 24/7, just keep as is
            return;
        }
    });
}

function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.querySelector('.value-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Blog "Show More" functionality
document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.querySelector('.blog-more .btn');

    if (showMoreButton) {
        showMoreButton.addEventListener('click', function () {
            // In a real application, this would load more blog posts
            showNotification('Funkcja "Pokaż więcej" zostanie wkrótce dodana!', 'info');
        });
    }
});

// Service card hover effects
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect (uncomment if desired)
// document.addEventListener('DOMContentLoaded', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 50);
//     }
// });

// Performance optimization: Lazy loading for images (if you add real images later)
document.addEventListener('DOMContentLoaded', function () {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && typeof callback === 'function') {
        callback(element);
    }
}

// Legal Documents Toggle
function initLegalDocuments() {
    const legalLinks = document.querySelectorAll('.footer-legal a');
    const legalSections = document.querySelectorAll('.legal-section');

    legalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Ukryj wszystkie sekcje prawne
            legalSections.forEach(section => {
                section.style.display = 'none';
            });

            // Pokaż wybraną sekcję
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Article Management
function showArticle(articleId) {
    // Ukryj wszystkie sekcje
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Pokaż wybrany artykuł
    const articleSection = document.getElementById(articleId);
    if (articleSection) {
        articleSection.style.display = 'block';
        articleSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function hideArticle() {
    // Ukryj wszystkie artykuły
    const articleSections = document.querySelectorAll('.article-section');
    articleSections.forEach(section => {
        section.style.display = 'none';
    });

    // Pokaż główne sekcje strony
    const mainSections = document.querySelectorAll('section:not(.article-section):not(.legal-section)');
    mainSections.forEach(section => {
        section.style.display = 'block';
    });

    // Przewiń do sekcji blog
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Refresh to top function
function refreshToTop() {
    // Przewiń do góry strony
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Opcjonalnie: odśwież stronę po krótkim opóźnieniu
    setTimeout(() => {
        window.location.reload();
    }, 500);
}

// Initialize all features safely
document.addEventListener('DOMContentLoaded', function () {
    // Uruchom liquid blur effect
    initLiquidBlur();

    // Uruchom animację słów
    animateRotatingWords();

    // Uruchom obsługę dokumentów prawnych
    initLegalDocuments();

    // Add any additional initialization code here
    console.log('AutoFlow website loaded successfully!');
});
