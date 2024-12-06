document.addEventListener('DOMContentLoaded', () => {
    // Animate Hero Section Text
    const heroTitle = document.querySelector('.employers-hero h1');
    const heroSubtitle = document.querySelector('.employers-hero p');

    heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
    heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp');

    // Scroll Reveal Animation for Cards
    const sections = document.querySelectorAll('.card');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.2
    });

    sections.forEach(section => observer.observe(section));
});
