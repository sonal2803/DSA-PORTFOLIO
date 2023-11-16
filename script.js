// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation for the contact section
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const errorElement = document.getElementById('form-error');

        // Simple validation, you can customize this based on your needs
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            errorElement.textContent = 'All fields are required';
        } else {
            // You can add code here to handle form submission (e.g., sending an email)
            alert('Form submitted successfully!');
            // Clear form fields
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            errorElement.textContent = '';
        }
    });
});
