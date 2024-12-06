document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display success message
        alert(`Thank you, ${name}. Your message has been sent successfully!`);

        // Reset the form
        contactForm.reset();
    });
});
