const navbar = document.getElementById('navbar');

window.onscroll = function () {

    if (window.pageYOffset > 100) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};

console.log(navbar);