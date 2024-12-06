document.addEventListener('DOMContentLoaded', () => {
    // Animate Hero Section Text
    const heroTitle = document.querySelector('.project-management-hero h1');
    const heroSubtitle = document.querySelector('.project-management-hero p');

    heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
    heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp');

    // Scroll Reveal Animation for Key Features
    const featureCards = document.querySelectorAll('.features .card');
    const successCards = document.querySelectorAll('.success-stories .card');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target); // Unobserve to prevent repeat animations
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.2
    });

    featureCards.forEach(card => observer.observe(card));
    successCards.forEach(card => observer.observe(card));

    // Smooth Scroll to Sections (optional, if links navigate to sections)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
