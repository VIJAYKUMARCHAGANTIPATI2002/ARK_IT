document.addEventListener('DOMContentLoaded', () => {
    // Animate Hero Section Text
    const heroTitle = document.querySelector('.consulting-hero h1');
    const heroSubtitle = document.querySelector('.consulting-hero p');

    heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
    heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp');

    // Scroll Reveal Animation for Benefits and Industries Sections
    const benefitCards = document.querySelectorAll('.benefits .card');
    const industryCards = document.querySelectorAll('.industries .card');
    const howWeWorkCards = document.querySelectorAll('.how-we-work .card');

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

    benefitCards.forEach(card => observer.observe(card));
    industryCards.forEach(card => observer.observe(card));
    howWeWorkCards.forEach(card => observer.observe(card));

    // Smooth Scroll for Internal Links (optional)
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
