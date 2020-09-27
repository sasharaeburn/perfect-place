const navbar = document.getElementById('navbar');

window.onscroll = function () {
    if (window.pageYOffset > navbar.offsetHeight) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};

const contactForm = document.getElementById('contact-form');

if (typeof contactForm !== "undefined") {
    contactForm.onsubmit = function (event) {
        event.preventDefault();
        event.target.reset();

        alert('Сообщение отправлено.');
    }
}