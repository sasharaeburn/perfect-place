const navbar = document.getElementById('navbar');

window.onscroll = function () {
    if (window.pageYOffset > navbar.offsetHeight) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};
