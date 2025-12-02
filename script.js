     //Typing Effect
        document.addEventListener('DOMContentLoaded', function() {
            const typedTextSpan = document.querySelector('.typed-text');
            const textArray = ['Data Analyst', 'Network Engineer', 'CyberOps Specialist', 'Cloud Professional'];
            const typingDelay = 100;
            const erasingDelay = 50;
            const newTextDelay = 1500;
            let textArrayIndex = 0;
            let charIndex = 0;

            function type() {
                if (charIndex < textArray[textArrayIndex].length) {
                    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingDelay);
                } else {
                    setTimeout(erase, newTextDelay);
                }
            }

            function erase() {
                if (charIndex > 0) {
                    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(erase, erasingDelay);
                } else {
                    textArrayIndex++;
                    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                    setTimeout(type, typingDelay + 500);
                }
            }

            // Start typing effect
            setTimeout(type, newTextDelay + 100);

            // Mobile Navigation Toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // Certificate Dropdowns
            document.querySelectorAll('.certificate-header').forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const icon = header.querySelector('i');
                    
                    content.classList.toggle('active');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });

            // Skills Dropdowns
            document.querySelectorAll('.skill-header').forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const icon = header.querySelector('i');
                    
                    content.classList.toggle('active');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });

            // Project Responsibilities Dropdowns
            document.querySelectorAll('.responsibility-header').forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const icon = header.querySelector('i');
                    
                    content.classList.toggle('active');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });
             // ===== PROJECT RESPONSIBILITIES TOGGLE =====
document.querySelectorAll('.toggle-responsibilities').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        // Find the responsibilities section in this project card
        const projectCard = this.closest('.project-card');
        const responsibilitiesSection = projectCard.querySelector('.project-responsibilities');
        const responsibilityContent = projectCard.querySelector('.responsibility-content');
        const icon = projectCard.querySelector('.responsibility-header i');
        
        if (responsibilitiesSection) {
            // Toggle the responsibilities section
            responsibilitiesSection.classList.toggle('show');
            
            // Also toggle the content for the arrow animation
            if (responsibilityContent) {
                responsibilityContent.classList.toggle('active');
            }
            
            // Update the icon
            if (responsibilitiesSection.classList.contains('show')) {
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
                this.textContent = 'Hide Responsibilities';
            } else {
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
                this.textContent = 'Responsibilities';
            }
            
            // Scroll to show the responsibilities if they're hidden
            if (responsibilitiesSection.classList.contains('show')) {
                responsibilitiesSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }
    });
});
            // Form Submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            successMessage.style.display = 'block';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('There was a problem sending your message. Please try again.');
        }
    } catch (error) {
        alert('There was a problem sending your message. Please try again.');
    }
});

            // Scroll Animation
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe elements for scroll animation
            document.querySelectorAll('.timeline-content, .project-card, .award-card, .area-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(el);
            });
        })

        // Smooth scrolling for navigation links - ADD THIS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                const navLinks = document.querySelector('.nav-links');
                const hamburger = document.querySelector('.hamburger');
                if(navLinks && hamburger) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        }
    });
});


