document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header_burger');
    const headerRight = document.querySelector('.header_right');
    const gitHub = document.querySelector('.li_github');

        burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        });
});
