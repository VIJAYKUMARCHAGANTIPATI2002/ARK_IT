document.addEventListener('DOMContentLoaded', () => {
    // Animation for hero text fade-in
    const heroText = document.querySelector('.about-hero h1');
    const heroSubText = document.querySelector('.about-hero p');

    heroText.classList.add('animate__animated', 'animate__fadeInDown');
    heroSubText.classList.add('animate__animated', 'animate__fadeInUp');
});
