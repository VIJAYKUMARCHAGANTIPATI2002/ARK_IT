// // Add hover animation for dropdown
// document.addEventListener('DOMContentLoaded', () => {
//     const dropdown = document.querySelector('.dropdown');
//     dropdown.addEventListener('mouseenter', () => {
//         const dropdownMenu = dropdown.querySelector('.dropdown-menu');
//         dropdownMenu.style.opacity = '1';
//         dropdownMenu.style.transform = 'translateY(0)';
//     });

//     dropdown.addEventListener('mouseleave', () => {
//         const dropdownMenu = dropdown.querySelector('.dropdown-menu');
//         dropdownMenu.style.opacity = '0';
//         dropdownMenu.style.transform = 'translateY(10px)';
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation
    const heroSection = document.querySelector('.bg-primary');
    const heroElements = heroSection.querySelectorAll('h1, p, a');

    heroElements.forEach((element, index) => {
        element.classList.add('animate__animated', 'animate__fadeInUp', `animate__delay-${index + 1}s`);
    });

    // Apply Scroll Reveal Animation to All Sections
    const sections = document.querySelectorAll('section, .card, .carousel-item, .navbar, footer');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target); // Unobserve to prevent repeat animations
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    sections.forEach(section => observer.observe(section));

    // Smooth Scroll for Internal Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonial Carousel Auto Play
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000, // Change slide every 5 seconds
            wrap: true
        });
    }
});
