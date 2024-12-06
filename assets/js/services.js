document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

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
