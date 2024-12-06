document.addEventListener('DOMContentLoaded', () => {
    // Animate Hero Section Text
    const heroTitle = document.querySelector('.job-seekers-hero h1');
    const heroSubtitle = document.querySelector('.job-seekers-hero p');

    heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
    heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp');

    // Scroll Reveal Animation
    const sections = document.querySelectorAll('.card');

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

    sections.forEach(section => observer.observe(section));
});
